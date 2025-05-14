const {
  Venue
} = require('../models');

const venueController = {
  getAllVenues: async (req, res) => {
    try {
      const venues = await Venue.findAll();
      res.status(200).json(venues);
    } catch (err) {
      res.status(500).json({
        message: 'Error retrieving venues',
        error: err
      });
    }
  },

  getVenueById: async (req, res) => {
    try {
      const venue = await Venue.findByPk(req.params.id);
      if (!venue) {
        res.status(404).json({
          message: 'Venue not found'
        });
        return;
      }
      res.status(200).json(venue);
    } catch (err) {
      res.status(500).json({
        message: 'Error retrieving venue',
        error: err
      });
    }
  },

  createVenue: async (req, res) => {
    try {
      const newVenue = await Venue.create(req.body);
      res.status(201).json(newVenue);
    } catch (err) {
      res.status(400).json({
        message: 'Error creating venue',
        error: err
      });
    }
  },

  updateVenue: async (req, res) => {
    try {
      const [updatedRows] = await Venue.update(req.body, {
        where: {
          venue_id: req.params.id
        },
      });
      if (updatedRows === 0) {
        res.status(404).json({
          message: 'Venue not found or no changes made'
        });
        return;
      }
      const updatedVenue = await Venue.findByPk(req.params.id);
      res.status(200).json(updatedVenue);
    } catch (err) {
      res.status(400).json({
        message: 'Error updating venue',
        error: err
      });
    }
  },

  deleteVenue: async (req, res) => {
    try {
      const deletedRows = await Venue.destroy({
        where: {
          venue_id: req.params.id
        },
      });
      if (deletedRows === 0) {
        res.status(404).json({
          message: 'Venue not found'
        });
        return;
      }
      res.status(200).json({
        message: 'Venue deleted successfully'
      });
    } catch (err) {
      res.status(500).json({
        message: 'Error deleting venue',
        error: err
      });
    }
  },
};

module.exports = venueController;