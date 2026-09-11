const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    name:           { type: String, required: true, trim: true },
    qualification:  { type: String, default: '' },
    specialization: { type: String, default: '' },
    experience:     { type: Number, default: 0 },
    phone:          { type: String, default: '' },
    email:          { type: String, default: '' },
    bio:            { type: String, default: '' },
    image:          { type: String, default: '' },   // ← Cloudinary URL
    cloudinaryId:   { type: String, default: '' },   // ← for deletion
    status: {
      type:    String,
      enum:    ['active', 'inactive'],
      default: 'active'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Doctor', doctorSchema);
