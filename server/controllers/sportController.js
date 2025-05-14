const sportModel = require('../models/sportModel');

const sportController = {
  // Get all sports
  getAllSports: async (req, res) => {
    try {
      const sports = await sportModel.getAllSports();
      res.status(200).json(sports);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get a single sport by ID
  getSportById: async (req, res) => {
    try {
      const sport = await sportModel.getSportById(req.params.id);
      if (!sport) {
        res.status(404).json({ message: 'Sport not found' });
        return;
      }
      res.status(200).json(sport);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Create a new sport
  createSport: async (req, res) => {
    try {
      const sport = await sportModel.createSport(req.body);
      res.status(201).json(sport);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Update a sport by ID
  updateSport: async (req, res) => {
    try {
      const updatedSport = await sportModel.updateSport(req.params.id, req.body);
      if (!updatedSport) {
        res.status(404).json({ message: 'Sport not found or no changes made' });
        return;
      }
      res.status(200).json(updatedSport);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Delete a sport by ID
  deleteSport: async (req, res) => {
    try {
      const deleted = await sportModel.deleteSport(req.params.id);
      if (!deleted) {
        res.status(404).json({ message: 'Sport not found' });
        return;
      }
      res.status(200).json({ message: 'Sport deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = sportController;