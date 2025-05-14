const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Placeholder for your JWT secret key.
  // It's best to store this in environment variables.
  const jwtSecret = 'YOUR_JWT_SECRET';

  // Get token from header
  const token = req.header('Authorization');

  // Check if not token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token.replace('Bearer ', ''), jwtSecret);

    // Attach user to request object
    req.user = decoded.user; // Assuming your JWT payload has a 'user' field with user information

    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;