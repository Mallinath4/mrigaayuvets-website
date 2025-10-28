const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// GET /api/doctors - List active doctors (PUBLIC)
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find({ status: 'active' }).sort({ createdAt: -1 });
    res.json({ doctors });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/doctors/:id - Fetch a single doctor (PUBLIC)
router.get('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
    res.json({ doctor });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
