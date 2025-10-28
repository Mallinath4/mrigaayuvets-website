const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Gallery = require('../models/Gallery');
const Appointment = require('../models/Appointment');
const Contact = require('../models/Contact');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// --- ADMIN LOGIN ---
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email: email.toLowerCase().trim() });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id, email: admin.email }, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// --- Get all doctors (admin) ---
router.get('/doctors', authMiddleware, async (req, res) => {
  try {
    const doctors = await Doctor.find().sort({ createdAt: -1 });
    res.json({ doctors });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// --- Add new doctor (admin) ---
router.post('/doctors', authMiddleware, async (req, res) => {
  try {
    const { name, qualification, specialization, experience, phone, email, bio, image } = req.body;
    const doctor = new Doctor({
      name,
      qualification,
      specialization,
      experience: parseInt(experience),
      phone,
      email,
      bio,
      image,
      status: 'active'
    });
    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully', doctor });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// --- Delete doctor (admin) ---
router.delete('/doctors/:id', authMiddleware, async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// --- Toggle doctor status (admin) ---
router.patch('/doctors/:id/toggle-status', authMiddleware, async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    doctor.status = doctor.status === 'active' ? 'inactive' : 'active';
    await doctor.save();
    res.json({ status: doctor.status });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// --- Admin: Add image to gallery ---
router.post('/gallery', authMiddleware, async (req, res) => {
  try {
    const { title, description, url } = req.body;
    const image = new Gallery({ title, description, url });
    await image.save();
    res.status(201).json({ message: 'Image added successfully', image });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// --- Admin: Delete image from gallery ---
router.delete('/gallery/:id', authMiddleware, async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
// Get all appointments (admin)
router.get('/appointments', authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json({ appointments });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all contacts (admin)
router.get('/contacts', authMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ contacts });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
