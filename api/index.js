require('dotenv').config({ path: require('path').join(__dirname, '.env') });

const express    = require('express');
const cors       = require('cors');
const mongoose   = require('mongoose');
const path       = require('path');

const app = express();

// ── Check required env vars ───────────────────────────────────────────────────
const requiredVars = ['MONGO_URI', 'JWT_SECRET'];
requiredVars.forEach(v => {
  if (!process.env[v]) {
    console.error(`❌ Missing env variable: ${v}`);
    process.exit(1);
  }
});

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── MongoDB ───────────────────────────────────────────────────────────────────
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB Error:', err.message));

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/admin',        require('./routes/admin'));
app.use('/api/doctors',      require('./routes/doctors'));
app.use('/api/gallery',      require('./routes/gallery'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/contact',      require('./routes/contact'));

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status:  'OK',
    message: '🐾 MrigAayuvets API running',
    mongo:   mongoose.connection.readyState === 1 ? '✅ connected' : '❌ disconnected'
  });
});

// ── 404 ───────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.path} not found` });
});

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

// ── For Vercel serverless ─────────────────────────────────────────────────────
module.exports = app;

// ── Local dev only ────────────────────────────────────────────────────────────
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
}
