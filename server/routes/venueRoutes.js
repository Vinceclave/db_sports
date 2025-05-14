const express = require('express');
const router = express.Router();
const venueController = require('../controllers/venueController');

// GET all venues
router.get('/', venueController.getAllVenues);

// GET a single venue by ID
router.get('/:id', venueController.getVenueById);

// POST a new venue
router.post('/', venueController.createVenue);

// PUT update a venue by ID
router.put('/:id', venueController.updateVenue);

// DELETE a venue by ID
router.delete('/:id', venueController.deleteVenue);

module.exports = router;