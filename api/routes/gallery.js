const express   = require('express');
const router    = express.Router();
const path      = require('path');
const fs        = require('fs');
const Gallery   = require('../models/Gallery');
const upload = require('../middleware/uploadGallery');
const adminAuth = require('../middleware/auth');

// ─────────────────────────────────────────────
// PUBLIC ROUTES
// ─────────────────────────────────────────────

// GET /api/gallery — All images (optionally filter by category)
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;  // ?category=dogs
    const query = category ? { category } : {};
    const images = await Gallery.find(query).sort({ createdAt: -1 });
    res.json({ images });
  } catch (error) {
    console.error('Gallery fetch error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/gallery/:id — Single image
router.get('/:id', async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) return res.status(404).json({ error: 'Image not found' });
    res.json({ image });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ─────────────────────────────────────────────
// ADMIN ROUTES  (all protected)
// ─────────────────────────────────────────────

// POST /api/gallery/admin/upload — Upload one image
router.post(
  '/admin/upload',
  adminAuth,
  upload.single('image'),   // field name in form-data must be "image"
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No image file provided' });
      }

      const { title, description, category } = req.body;
      if (!title) {
        // Delete the uploaded file if validation fails
        fs.unlinkSync(req.file.path);
        return res.status(400).json({ error: 'Title is required' });
      }

      // Build the public URL your React frontend will use
      const imageUrl = `/static/images/gallery/${req.file.filename}`;

      const newImage = await Gallery.create({
        title:       title.trim(),
        description: description?.trim() || '',
        category:    category?.toLowerCase() || 'other',
        url:         imageUrl,
        filename:    req.file.filename
      });

      res.status(201).json({
        message: 'Image uploaded successfully',
        image: newImage
      });
    } catch (error) {
      // Clean up file if DB save fails
      if (req.file?.path && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Upload failed' });
    }
  }
);

// POST /api/gallery/admin/upload-multiple — Upload up to 10 images at once
router.post(
  '/admin/upload-multiple',
  adminAuth,
  upload.array('images', 10),  // up to 10 files, field name "images"
  async (req, res) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No files provided' });
      }

      const { category } = req.body;

      const imageDocuments = req.files.map((file) => ({
        title:       file.originalname.replace(/\.[^/.]+$/, '').replace(/-/g, ' '), // strip extension
        description: '',
        category:    category?.toLowerCase() || 'other',
        url:         `/static/images/gallery/${file.filename}`,
        filename:    file.filename
      }));

      const savedImages = await Gallery.insertMany(imageDocuments);

      res.status(201).json({
        message: `${savedImages.length} image(s) uploaded successfully`,
        images: savedImages
      });
    } catch (error) {
      // Clean up all uploaded files on failure
      req.files?.forEach((file) => {
        if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
      });
      console.error('Bulk upload error:', error);
      res.status(500).json({ error: 'Upload failed' });
    }
  }
);

// PUT /api/gallery/admin/:id — Update image metadata (no file change)
router.put('/admin/:id', adminAuth, async (req, res) => {
  try {
    const { title, description, category } = req.body;

    const updated = await Gallery.findByIdAndUpdate(
      req.params.id,
      {
        ...(title       && { title: title.trim() }),
        ...(description !== undefined && { description: description.trim() }),
        ...(category    && { category: category.toLowerCase() })
      },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ error: 'Image not found' });
    res.json({ message: 'Updated successfully', image: updated });
  } catch (error) {
    res.status(500).json({ error: 'Update failed' });
  }
});

// DELETE /api/gallery/admin/:id — Delete image from DB + disk
router.delete('/admin/:id', adminAuth, async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) return res.status(404).json({ error: 'Image not found' });

    // Remove from disk
    const filePath = path.join(
      __dirname, '..', 'public', 'static', 'images', 'gallery', image.filename
    );
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Delete failed' });
  }
});

// ─── Multer error handler (file size / type validation) ──────────────────────
router.use((err, req, res, next) => {
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ error: 'File too large. Maximum size is 5MB.' });
  }
  if (err.message) {
    return res.status(400).json({ error: err.message });
  }
  next(err);
});

module.exports = router;
