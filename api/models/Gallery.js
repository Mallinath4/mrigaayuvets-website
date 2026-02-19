const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    title:        { type: String, required: true, trim: true },
    description:  { type: String, default: '' },
    category: {
      type:      String,
      default:   'other',
      lowercase: true
    },
    url:          { type: String, required: true },  // Cloudinary URL
    cloudinaryId: { type: String, default: '' },     // for deletion
  },
  { timestamps: true }
);

module.exports = mongoose.model('Gallery', gallerySchema);
