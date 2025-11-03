require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ===== SERVE STATIC FILES =====
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../build')));

// ===== MONGODB CONNECTION =====
if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('✅ MongoDB Connected'))
    .catch((err) => console.error('❌ MongoDB Error:', err.message));
} else {
  console.warn('⚠️ No MONGODB_URI - database disabled');
}

// ===== API ROUTES =====

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'API running',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Get Doctors
app.get('/api/doctors', async (req, res) => {
  try {
    res.json({
      success: true,
      doctors: [
        {
          name: 'Dr. Siddheshwar Khonde',
          qualification: 'BVSC & AH',
          experience: 5,
          bio: '5+ years of experience in veterinary practice',
          image: '/static/images/siddhu.png'
        },
        {
          name: 'Dr. Ganesh Jagtap',
          qualification: 'Internal Medicine Specialist',
          experience: 5,
          bio: 'Specializing in pet internal medicine and cardiology',
          image: '/static/images/Ganesh.jpg'
        },
        {
          name: 'Dr. Ankit Chavan',
          qualification: 'BVSC & AH',
          experience: 2,
          bio: 'Small animal treatment specialist',
          image: '/static/images/Aniket.jpg'
        }
      ]
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get Gallery
app.get('/api/gallery', async (req, res) => {
  try {
    res.json({ 
      success: true,
      gallery: [] 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Upload Gallery (Admin)
app.post('/api/admin/gallery', async (req, res) => {
  try {
    const { title, description, image } = req.body;

    if (!title || !image) {
      return res.status(400).json({
        success: false,
        error: 'Title and image are required'
      });
    }

    // TODO: Save to MongoDB
    // const gallery = new Gallery({ title, description, image });
    // await gallery.save();

    res.json({
      success: true,
      message: 'Gallery uploaded successfully',
      data: { title, description, image }
    });
  } catch (error) {
    console.error('Gallery Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Book Appointment
app.post('/api/appointments', async (req, res) => {
  try {
    const { petName, date, time, email, phone } = req.body;

    if (!petName || !date || !email) {
      return res.status(400).json({
        success: false,
        error: 'Pet name, date, and email are required'
      });
    }

    // TODO: Save to MongoDB
    // const appointment = new Appointment({ petName, date, time, email, phone });
    // await appointment.save();

    res.json({
      success: true,
      message: 'Appointment booked successfully',
      appointmentId: Date.now()
    });
  } catch (error) {
    console.error('Appointment Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Contact Form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Email and message are required'
      });
    }

    // TODO: Save to MongoDB and send email
    // const contact = new Contact({ name, email, phone, message });
    // await contact.save();

    res.json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Contact Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ===== SERVE REACT APP =====
app.get('*', (req, res) => {
  try {
    const buildPath = path.join(__dirname, '../build/index.html');
    res.sendFile(buildPath);
  } catch (error) {
    res.status(500).json({ error: 'Could not serve app' });
  }
});

// ===== ERROR HANDLER =====
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    success: false,
    error: err.message || 'Internal Server Error'
  });
});

// ===== IMPORTANT: Export, don't listen! =====
module.exports = app;
