// server/controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Placeholder: Find user by email in the database
    // Replace with your actual database query
    const user = {
      // Example user object - replace with database result
      user_id: 1,
      email: 'test@example.com',
      password_hash: '$2b$10$examplehashedpassword', // Replace with a real hashed password
      role: 'user',
    };

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare provided password with hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT
    // Placeholder: Replace 'your_jwt_secret' with a strong, secret key
    const token = jwt.sign(
      { user_id: user.user_id, role: user.role },
      'your_jwt_secret',
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    res.status(200).json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};