const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');
const Gallery = require('./models/Gallery');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mrigaayuvets';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(async () => {
    console.log('✅ Connected to MongoDB');
    
    // Clear existing data
    await Doctor.deleteMany({});
    await Gallery.deleteMany({});
    console.log('🗑️  Cleared existing data');
    
    // Add sample doctors
    const doctors = [
      {
        name: 'Dr. Siddheshwar Khonde',
        qualification: 'BVSC & AH',
        specialization: 'Small Animal Surgery',
        experience: 5,
        phone: '+91 8208657969',
        email: 'siddheshwar@mrigaayuvets.com',
        bio: '5+ years of experience in veterinary practise with specialization in small animal and emergency care.',
        image: '/static/images/siddhu.png',
        status: 'active'
      },
      {
        name: 'Dr. Ganesh Jagtap',
        qualification: 'BVSC & AH',
        specialization: 'Internal Medicine',
        experience: 5,
        phone: '+91 8208657969',
        email: 'ganesh@mrigaayuvets.com',
        bio: '5+ years specializing in pet internal medicine, cardiology, and preventive care for all breeds.',
        image: '/static/images/Ganesh.jpg',
        status: 'active'
      },
      {
        name: 'Dr. Ankit Chavan',
        qualification: 'BVSC & AH',
        specialization: 'Exotic Pets',
        experience: 2,
        phone: '+91 8208657969',
        email: 'ankit@mrigaayuvets.com',
        bio: '2+ years experience in small animals treatment and budding veterinary pathologist.',
        image: '/static/images/Aniket.jpg',
        status: 'active'
      }
    ];

    await Doctor.insertMany(doctors);
    console.log('✅ Added 3 sample doctors');

    console.log('\n🎉 Database seeded successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
