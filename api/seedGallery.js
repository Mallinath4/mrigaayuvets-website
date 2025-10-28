const mongoose = require('mongoose');
const Gallery = require('./models/Gallery');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mrigaayuvets';

const images = [
  { image_path: 'gall1.jpeg', uploaded_at: '2024-01-01', alt: '#' },
  { image_path: 'gall2.jpeg', uploaded_at: '2024-01-02', alt: '#' },
  { image_path: 'gall3.jpeg', uploaded_at: '2024-01-03', alt: '#' },
  { image_path: 'gall4.jpeg', uploaded_at: '2024-01-04', alt: '#' },
  { image_path: 'gall5.jpeg', uploaded_at: '2024-01-05', alt: '#' },
  { image_path: 'gall6.jpeg', uploaded_at: '2024-01-06', alt: '#' },
  { image_path: 'gall7.jpeg', uploaded_at: '2024-01-07', alt: '#' },
  { image_path: 'gall8.jpeg', uploaded_at: '2024-01-08', alt: '#' },
  { image_path: 'gall9.jpeg', uploaded_at: '2024-01-09', alt: '#' },
  { image_path: 'gall10.jpeg', uploaded_at: '2024-01-10', alt: '#' },
  { image_path: 'gall11.jpeg', uploaded_at: '2024-01-11', alt: '#' },
  { image_path: 'gall12.jpeg', uploaded_at: '2024-01-12', alt: '#' },
  { image_path: 'gall13.jpeg', uploaded_at: '2024-01-13', alt: '#' },
  { image_path: 'gall14.jpeg', uploaded_at: '2024-01-14', alt: '#' },
  { image_path: 'gall15.jpeg', uploaded_at: '2024-01-15', alt: '#' },
  { image_path: 'gall16.jpeg', uploaded_at: '2024-01-16', alt: '#' },
  { image_path: 'gall17.jpeg', uploaded_at: '2024-01-17', alt: '#' },
  { image_path: 'gall18.jpeg', uploaded_at: '2024-01-18', alt: '#' },
  { image_path: 'gall19.jpeg', uploaded_at: '2024-01-19', alt: '#' },
  { image_path: 'gall20.jpeg', uploaded_at: '2024-01-20', alt: '#' }
];

// Prefix local paths for frontend if images are inside /public/gallery
const galleryDocs = images.map(img => ({
  title: img.alt,
  description: `Uploaded on ${img.uploaded_at}`,
  url: `/static/gallery/${img.image_path}`,
}));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Gallery.deleteMany({}); // Optional: clear previous images
    await Gallery.insertMany(galleryDocs);
    console.log('✅ Gallery seeded with sample images.');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('❌ Error:', err);
    process.exit(1);
  });


