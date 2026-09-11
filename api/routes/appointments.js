const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

router.post('/', async (req, res) => {
  const { name, email, phone, pet_name, pet_type, service, preferred_date, preferred_time, message } = req.body;

  try {
    // 1. Store appointment in DB
    const appointment = new Appointment({
      name, email, phone, pet_name, pet_type, service, preferred_date, preferred_time, message
    });
    await appointment.save();

    // 2. Generate WhatsApp message URL string
    const whatsappMessage = encodeURIComponent(
      `🐾 *New Appointment Request* 🐾\n\n` +
      `👤 Patient Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n` +
      `🐕 Pet Details:\nPet Name: ${pet_name || 'N/A'}\nPet Type: ${pet_type || 'N/A'}\n\n` +
      `⚕️ Service Required:\n${service || 'General consultation'}\n\n` +
      `📅 Preferred Schedule:\nDate: ${preferred_date || 'ASAP'}\nTime: ${preferred_time || 'Flexible'}\n\n` +
      `📝 Additional Info:\n${message || 'None'}\n\n` +
      `Thank you for choosing MrigAayuvets! 🙏`
    );

    const whatsappUrl = `https://wa.me/918208657969?text=${whatsappMessage}`;

    // 3. Return response with whatsappUrl for frontend to open
    res.status(201).json({ message: 'Appointment created', whatsappUrl });
  } catch (error) {
    console.error('Appointment error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
