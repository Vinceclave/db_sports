// server/controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email in the database
    const user = await require('../models/userModel').getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare provided password with hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT
    // If user is admin by username/email, set role to 'admin', else 'user'
    let role = 'user';
    if (user.username === 'admin' || user.email === 'admin@example.com') {
      role = 'admin';
    }
    const token = jwt.sign(
      { user_id: user.user_id, role },
      'your_jwt_secret',
      { expiresIn: '1h' }
    );

    // Send role for routing
    res.status(200).json({ token, role });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};