const { User } = require('../models');

const userController = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get a single user by ID
  getUserById: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
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
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Update a user by ID
  updateUser: async (req, res) => {
    try {
      const [updatedRowsCount, updatedUsers] = await User.update(req.body, {
        where: { user_id: req.params.id },
        returning: true, // Return the updated object
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(updatedUsers[0]);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Delete a user by ID
  deleteUser: async (req, res) => {
    try {
      const deletedRowCount = await User.destroy({
        where: { user_id: req.params.id },
      });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = userController;