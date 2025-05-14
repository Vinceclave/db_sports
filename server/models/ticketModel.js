const pool = require('../config/config');

const Ticket = {
  getAllTickets: async () => {
    const [rows] = await pool.query('SELECT * FROM Tickets');
    return rows;
  },

  getTicketById: async (ticketId) => {
    const [rows] = await pool.query('SELECT * FROM Tickets WHERE ticket_id = ?', [ticketId]);
    return rows[0];
  },

  getTicketsByRegistrationId: async (registrationId) => {
    const [rows] = await pool.query('SELECT * FROM Tickets WHERE registration_id = ?', [registrationId]);
    return rows;
  },

  createTicket: async (registrationId, qrCode) => {
    const [result] = await pool.query('INSERT INTO Tickets (registration_id, qr_code) VALUES (?, ?)', [registrationId, qrCode]);
    const [rows] = await pool.query('SELECT * FROM Tickets WHERE ticket_id = ?', [result.insertId]);
    return rows[0];
  },

  updateTicket: async (ticketId, registrationId, issueDate, qrCode) => {
    const [result] = await pool.query('UPDATE Tickets SET registration_id = ?, issue_date = ?, qr_code = ? WHERE ticket_id = ?', [registrationId, issueDate, qrCode, ticketId]);
    const [rows] = await pool.query('SELECT * FROM Tickets WHERE ticket_id = ?', [ticketId]);
    return rows[0];
  },

  deleteTicket: async (ticketId) => {
    const [result] = await pool.query('DELETE FROM Tickets WHERE ticket_id = ?', [ticketId]);
    return result.affectedRows;
  },
};

module.exports = Ticket;