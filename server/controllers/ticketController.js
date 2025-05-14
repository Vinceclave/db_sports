const ticketModel = require('../models/ticketModel');

const ticketController = {
  getAllTickets: async (req, res) => {
    try {
      const tickets = await ticketModel.getAllTickets();
      res.status(200).json(tickets);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getTicketById: async (req, res) => {
    try {
      const ticket = await ticketModel.getTicketById(req.params.id);
      if (!ticket || ticket.length === 0) {
        res.status(404).json({
          message: 'No ticket found with this id!'
        });
        return;
      }
      res.status(200).json(ticket);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  createTicket: async (req, res) => {
    try {
      const newTicketId = await ticketModel.createTicket(req.body);
      res.status(201).json({ ticket_id: newTicketId, ...req.body });
    } catch (err) { // Consider more specific error handling for validation
      res.status(400).json(err);
    }
  },

  updateTicket: async (req, res) => {
    try {
      const success = await ticketModel.updateTicket(req.params.id, req.body);
      if (!success) {
        res.status(404).json({ message: 'No ticket found with this id!' });
        return;
      }
      res.status(200).json({ message: 'Ticket updated successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteTicket: async (req, res) => {
    try {
      const deletedRows = await ticketModel.deleteTicket(req.params.id);
      if (deletedRows === 0) {
        res.status(404).json({
          message: 'No ticket found with this id!'
        });
      }
      res.status(200).json({ message: 'Ticket deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = ticketController;