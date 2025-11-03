require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../build')));

// MongoDB Connection (Only connect if URI exists)
if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('✅ MongoDB Connected'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));
} else {
  console.warn('⚠️  MONGODB_URI not set - database features disabled');
}

// ===== HEALTH CHECK =====
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// ===== DOCTORS ENDPOINT =====
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
    console.error('❌ Doctors API Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ===== ADMIN ROUTES (Gallery Upload) =====
app.post('/api/admin/gallery', async (req, res) => {
  try {
    console.log('📸 Gallery Upload Request received');
    
    if (!req.body) {
      return res.status(400).json({ 
        success: false, 
        error: 'Request body is empty' 
      });
    }

    console.log('Data received:', req.body);
    
    // TODO: Save to MongoDB here
    // For now, just return success
    res.json({ 
      success: true, 
      message: 'Gallery uploaded successfully',
      data: req.body 
    });
  } catch (error) {
    console.error('❌ Gallery API Error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// ===== GALLERY GET ENDPOINT =====
app.get('/api/gallery', async (req, res) => {
  try {
    res.json({ 
      success: true, 
      message: 'Gallery retrieved',
      gallery: [] 
    });
  } catch (error) {
    console.error('❌ Gallery GET Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ===== CONTACT ENDPOINT =====
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📧 Contact Form received:', req.body);
    
    const { name, email, message, phone } = req.body;

    if (!email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email and message are required' 
      });
    }

    // TODO: Save to MongoDB and send email
    res.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('❌ Contact Error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// ===== APPOINTMENTS ENDPOINT =====
app.post('/api/appointments', async (req, res) => {
  try {
    console.log('📅 Appointment Booking received:', req.body);
    
    const { petName, date, time, phone, email } = req.body;

    if (!petName || !date) {
      return res.status(400).json({ 
        success: false, 
        error: 'Pet name and date are required' 
      });
    }

    // TODO: Save to MongoDB
    res.json({ 
      success: true, 
      message: 'Appointment booked successfully',
      appointmentId: Date.now()
    });
  } catch (error) {
    console.error('❌ Appointment Error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// ===== SERVE REACT APP =====
app.get('*', (req, res) => {
  try {
    const buildPath = path.join(__dirname, '../build/index.html');
    res.sendFile(buildPath);
  } catch (error) {
    console.error('❌ Error serving index.html:', error);
    res.status(500).json({ error: 'Could not serve index.html' });
  }
});

// ===== ERROR HANDLING =====
app.use((err, req, res, next) => {
  console.error('🔴 Error:', err);
  res.status(500).json({ 
    success: false,
    error: err.message || 'Internal Server Error',
    code: 'INTERNAL_SERVER_ERROR'
  });
});

// ⚠️ IMPORTANT: Don't use app.listen() on Vercel
// Just export the app
module.exports = app;
