const express   = require('express');
const router    = express.Router();
const Doctor    = require('../models/Doctor');
const upload    = require('../middleware/upload');
const auth      = require('../middleware/auth'); // your existing auth middleware
const cloudinary = require('../config/cloudinary');

// ─────────────────────────────────────────────
// PUBLIC ROUTES
// ─────────────────────────────────────────────

// GET /api/doctors — All active doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find({ status: 'active' }).sort({ createdAt: -1 });
    res.json({ doctors });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/doctors/:id — Single doctor
router.get('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
    res.json({ doctor });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─────────────────────────────────────────────
// ADMIN ROUTES (protected)
// ─────────────────────────────────────────────

// POST /api/doctors/admin/create — Add a new doctor
router.post(
  '/admin/create',
  auth,
  upload.single('photo'), // field name in form-data: "photo"
  async (req, res) => {
    try {
      const { name, specialization, experience, qualification, bio, status } = req.body;

      if (!name || !specialization) {
        return res.status(400).json({ error: 'Name and specialization are required' });
      }

      const doctorData = {
        name:           name.trim(),
        specialization: specialization.trim(),
        experience:     experience || '',
        qualification:  qualification || '',
        bio:            bio || '',
        status:         status || 'active',
      };

      // If photo uploaded, save Cloudinary URL
      if (req.file) {
        doctorData.photo        = req.file.path;       // Cloudinary secure URL
        doctorData.cloudinaryId = req.file.filename;   // public_id for deletion
      }

      const doctor = await Doctor.create(doctorData);
      res.status(201).json({ message: 'Doctor added successfully', doctor });
    } catch (error) {
      console.error('Create doctor error:', error);
      res.status(500).json({ error: 'Failed to create doctor' });
    }
  }
);

// PUT /api/doctors/admin/:id — Update doctor details + optional new photo
router.put(
  '/admin/:id',
  auth,
  upload.single('photo'),
  async (req, res) => {
    try {
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

      const { name, specialization, experience, qualification, bio, status } = req.body;

      const updateData = {
        ...(name           && { name: name.trim() }),
        ...(specialization && { specialization: specialization.trim() }),
        ...(experience     !== undefined && { experience }),
        ...(qualification  !== undefined && { qualification }),
        ...(bio            !== undefined && { bio }),
        ...(status         && { status }),
      };

      // If new photo uploaded, delete old one from Cloudinary first
      if (req.file) {
        if (doctor.cloudinaryId) {
          await cloudinary.uploader.destroy(doctor.cloudinaryId);
        }
        updateData.photo        = req.file.path;
        updateData.cloudinaryId = req.file.filename;
      }

      const updated = await Doctor.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true, runValidators: true }
      );

      res.json({ message: 'Doctor updated successfully', doctor: updated });
    } catch (error) {
      console.error('Update doctor error:', error);
      res.status(500).json({ error: 'Failed to update doctor' });
    }
  }
);

// PUT /api/doctors/admin/:id/status — Toggle active/inactive quickly
router.put('/admin/:id/status', auth, async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

    doctor.status = doctor.status === 'active' ? 'inactive' : 'active';
    await doctor.save();

    res.json({ message: `Doctor is now ${doctor.status}`, doctor });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update status' });
  }
});

// DELETE /api/doctors/admin/:id — Delete doctor + remove photo from Cloudinary
router.delete('/admin/:id', auth, async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

    // Delete photo from Cloudinary
    if (doctor.cloudinaryId) {
      await cloudinary.uploader.destroy(doctor.cloudinaryId);
    }

    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error('Delete doctor error:', error);
    res.status(500).json({ error: 'Failed to delete doctor' });
  }
});

// Multer error handler
router.use((err, req, res, next) => {
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ error: 'File too large. Max 5MB allowed.' });
  }
  if (err.message) {
    return res.status(400).json({ error: err.message });
  }
  next(err);
});

module.exports = router;
