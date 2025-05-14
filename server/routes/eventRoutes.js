const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// GET all events
router.get('/', eventController.getAllEvents);

// GET a single event by ID
router.get('/:id', eventController.getEventById);

// CREATE a new event
router.post('/', eventController.createEvent);

// UPDATE an event by ID
router.put('/:id', eventController.updateEvent);

// DELETE an event by ID
router.delete('/:id', eventController.deleteEvent);

module.exports = router;