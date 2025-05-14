const {
  getAllVenues,
  getVenueById,
  createVenue,
  updateVenue,
  deleteVenue
} = require('../models/venueModel');

const venueController = {
  getAllVenues: async (req, res) => {
    try {
      const venues = await getAllVenues();
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
      const venue = await getVenueById(req.params.id);
      if (venue.length === 0) {
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
      const newVenue = await createVenue(req.body);
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
      const updatedVenue = await updateVenue(req.params.id, req.body);
      if (!updatedVenue) {
        res.status(404).json({
          message: 'Venue not found'
        });
        return;
      }
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
      const success = await deleteVenue(req.params.id);
      if (!success) {
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