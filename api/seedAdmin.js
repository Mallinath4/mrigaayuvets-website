const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');
require('dotenv').config();

async function seedAdmin() {
  await mongoose.connect(process.env.MONGODB_URI);

  // Find admin by email
  let admin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });

  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

  if (admin) {
    // Update password!
    admin.password = hashedPassword;
    await admin.save();
    console.log('✅ Admin password updated successfully');
  } else {
    // Create if not exists
    await Admin.create({
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword
    });
    console.log('✅ Admin user created');
  }

  mongoose.connection.close();
}

seedAdmin().catch(console.error);
