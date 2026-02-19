const express    = require('express');
const router     = express.Router();
const Doctor     = require('../models/Doctor');
const Gallery    = require('../models/Gallery');
const Appointment = require('../models/Appointment');
const Contact    = require('../models/Contact');
const Admin      = require('../models/Admin');
const bcrypt     = require('bcryptjs');
const jwt        = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth');
const cloudinary = require('../config/cloudinary');   // ← ADD

// ── Cloudinary upload middleware (defined here, no separate file needed) ──────
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder:          'mrigaayuvets/gallery',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'gif'],
    transformation:  [{ width: 1200, height: 1200, crop: 'limit', quality: 'auto' }]
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    allowed.includes(file.mimetype)
      ? cb(null, true)
      : cb(new Error('Only JPEG, PNG, WEBP, GIF allowed'), false);
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// ─────────────────────────────────────────────────────────────────────────────
// AUTH
// ─────────────────────────────────────────────────────────────────────────────

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email: email.toLowerCase().trim() });
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY ROUTES
// ─────────────────────────────────────────────────────────────────────────────

// GET /api/admin/gallery
router.get('/gallery', authMiddleware, async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.json({ images });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/admin/gallery — file upload via Cloudinary
router.post('/gallery', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    // If no file was attached
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const { title, description, category } = req.body;

    if (!title) {
      // Delete uploaded file from Cloudinary if title is missing
      await cloudinary.uploader.destroy(req.file.filename);
      return res.status(400).json({ error: 'Title is required' });
    }

    const image = new Gallery({
      title:        title.trim(),
      description:  description?.trim() || '',
      category:     category?.toLowerCase().trim() || 'other',
      url:          req.file.path,      // ← Cloudinary CDN URL
      cloudinaryId: req.file.filename,  // ← public_id (for deletion)
    });

    await image.save();
    res.status(201).json({ message: 'Image uploaded successfully', image });
  } catch (error) {
    console.error('Gallery upload error:', error);
    res.status(500).json({ error: 'Upload failed: ' + error.message });
  }
});

// DELETE /api/admin/gallery/:id — also deletes from Cloudinary
router.delete('/gallery/:id', authMiddleware, async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) return res.status(404).json({ error: 'Image not found' });

    // Delete from Cloudinary first
    if (image.cloudinaryId) {
      await cloudinary.uploader.destroy(image.cloudinaryId);
    }

    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// DOCTOR ROUTES (unchanged)
// ─────────────────────────────────────────────────────────────────────────────

router.get('/doctors', authMiddleware, async (req, res) => {
  try {
    const doctors = await Doctor.find().sort({ createdAt: -1 });
    res.json({ doctors });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/doctors', authMiddleware, async (req, res) => {
  try {
    const { name, qualification, specialization, experience, phone, email, bio, image } = req.body;
    const doctor = new Doctor({
      name, qualification, specialization,
      experience: parseInt(experience),
      phone, email, bio, image,
      status: 'active'
    });
    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully', doctor });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/doctors/:id', authMiddleware, async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.patch('/doctors/:id/toggle-status', authMiddleware, async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    doctor.status = doctor.status === 'active' ? 'inactive' : 'active';
    await doctor.save();
    res.json({ status: doctor.status });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// APPOINTMENTS & CONTACTS (unchanged)
// ─────────────────────────────────────────────────────────────────────────────

router.get('/appointments', authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json({ appointments });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/contacts', authMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ contacts });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
