const userModel = require('../models/userModel');

const userController = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
 
  // Get a single user by ID
  getUserById: async (req, res) => {
    try {      const user = await userModel.getUserById(req.params.id);      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Create a new user
  createUser: async (req, res) => {
    try {      const newUser = await userModel.createUser(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Update a user by ID
  updateUser: async (req, res) => {
    try { const success = await userModel.updateUser(req.params.id, req.body);
      if (!success) {
        return res.status(404).json({ message: 'User not found' });
      }      
      res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Delete a user by ID
  deleteUser: async (req, res) => {
    try { const success = await userModel.deleteUser(req.params.id);
      if (!success) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = userController;