const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// GET all tickets
router.get('/', ticketController.getAllTickets);

// GET a single ticket by id
router.get('/:id', ticketController.getTicketById);

// CREATE a new ticket
router.post('/', ticketController.createTicket);

// UPDATE a ticket by id
router.put('/:id', ticketController.updateTicket);

// DELETE a ticket by id
router.delete('/:id', ticketController.deleteTicket);

module.exports = router;