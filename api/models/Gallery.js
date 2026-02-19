const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    title:       { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    category:    {
      type: String,
      enum: ['dogs', 'cats', 'birds', 'exotic', 'other'],
      default: 'other',
      lowercase: true
    },
    url:         { type: String, required: true },   // relative path served statically
    filename:    { type: String, required: true },   // actual file name on disk
    uploadedBy:  { type: String, default: 'admin' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Gallery', gallerySchema);
