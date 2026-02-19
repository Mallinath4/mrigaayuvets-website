require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const path     = require('path');

const app = express();

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Static files (local dev only) ─────────────────────────────────────────────
app.use('/static', express.static(path.join(__dirname, 'public', 'static')));

// ── MongoDB Connection ─────────────────────────────────────────────────────────
// ✅ No deprecated options
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err.message));

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/admin',        require('./routes/admin'));
app.use('/api/doctors',      require('./routes/doctors'));
app.use('/api/gallery',      require('./routes/gallery'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/contacts',     require('./routes/contact'));

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status:    'OK',
    message:   '🐾 MrigAayuvets API is running',
    timestamp: new Date().toISOString(),
    mongodb:   mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.path} not found` });
});

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

// ── Catch unhandled rejections (shows real error in Vercel logs) ──────────────
process.on('unhandledRejection', (reason) => {
  console.error('❌ Unhandled Rejection:', JSON.stringify(reason));
  console.error('❌ Message:', reason?.message || String(reason));
});

process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err.message);
});

// ── Export for Vercel ─────────────────────────────────────────────────────────
module.exports = app;

// ── Local dev ─────────────────────────────────────────────────────────────────
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}
