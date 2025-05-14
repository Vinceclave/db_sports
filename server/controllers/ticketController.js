const {
  Ticket
} = require('../models');

const ticketController = {
  getAllTickets: async (req, res) => {
    try {
      const tickets = await Ticket.findAll();
      res.status(200).json(tickets);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getTicketById: async (req, res) => {
    try {
      const ticket = await Ticket.findByPk(req.params.id);
      if (!ticket) {
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
      const newTicket = await Ticket.create(req.body);
      res.status(200).json(newTicket);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  updateTicket: async (req, res) => {
    try {
      const updatedTicket = await Ticket.update(req.body, {
        where: {
          ticket_id: req.params.id
        },
      });
      if (!updatedTicket[0]) {
        res.status(404).json({
          message: 'No ticket found with this id!'
        });
        return;
      }
      res.status(200).json(updatedTicket);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteTicket: async (req, res) => {
    try {
      const deletedTicket = await Ticket.destroy({
        where: {
          ticket_id: req.params.id
        },
      });
      if (!deletedTicket) {
        res.status(404).json({
          message: 'No ticket found with this id!'
        });
        return;
      }
      res.status(200).json(deletedTicket);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = ticketController;