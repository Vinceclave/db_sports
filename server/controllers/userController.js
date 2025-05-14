const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await userModel.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const { username, password, email, F_NAME, L_NAME, PHONE_NUM } = req.body;

      // Basic validation: check for required fields
      if (!username || !password || !email || !F_NAME || !L_NAME || !PHONE_NUM) {
        return res.status(400).json({ message: 'All fields are required for registration' });
      }

      const password_hash = await bcrypt.hash(password, 10);
      const newUser = await userModel.createUser({ username, password_hash, email, F_NAME, L_NAME, PHONE_NUM, ROLE: 'user' });

      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) { // Catch database errors or other issues
      res.status(400).json({ message: err.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { username, password, email } = req.body;

      if (!username || !password || !email) {
        return res.status(400).json({ message: 'Username, password, and email are required' });
      }

      const password_hash = await bcrypt.hash(password, 10);
      const success = await userModel.updateUser(req.params.id, { username, password_hash, email });

      if (!success) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const success = await userModel.deleteUser(req.params.id);
      if (!success) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = userController;
