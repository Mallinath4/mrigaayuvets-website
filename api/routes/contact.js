const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message
    });

    await contact.save();

    // Create WhatsApp message URL
    const whatsappMessage = encodeURIComponent(
      `📧 *New Contact Message* 📧\n\n` +
      `👤 Contact Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\n` +
      `📋 Subject: ${subject || 'General Inquiry'}\n\n` +
      `💬 Message:\n${message}\n\n` +
      `Thank you for contacting MrigaAayuvets!`
    );
    const whatsappUrl = `https://wa.me/918208657969?text=${whatsappMessage}`;

    res.status(201).json({ message: 'Message received', whatsappUrl });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
