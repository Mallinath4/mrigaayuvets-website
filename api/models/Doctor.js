const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qualification: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String, required: true },
  image: { type: String, required: true }, // URL or path to image
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
