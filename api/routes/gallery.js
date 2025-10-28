const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');

// GET /api/gallery - List all gallery images (public)
router.get('/', async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.json({ images });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/gallery/:id - Get single gallery image
router.get('/:id', async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) return res.status(404).json({ error: 'Image not found' });
    res.json({ image });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
