const pool = require('../config/config');

const Registration = {
  getAllRegistrations: (callback) => {
    pool.query('SELECT * FROM Registrations', callback);
  },

  getRegistrationById: (id, callback) => {
    pool.query('SELECT * FROM Registrations WHERE registration_id = ?', [id], callback);
  },

  createRegistration: (newRegistration, callback) => {
    pool.query('INSERT INTO Registrations SET ?', newRegistration, callback);
  },

  updateRegistration: (id, updatedRegistration, callback) => {
    pool.query('UPDATE Registrations SET ? WHERE registration_id = ?', [updatedRegistration, id], callback);
  },

  deleteRegistration: (id, callback) => {
    pool.query('DELETE FROM Registrations WHERE registration_id = ?', [id], callback);
  },

  // Function to get registrations by user ID
  getRegistrationsByUserId: (userId, callback) => {
    pool.query('SELECT * FROM Registrations WHERE user_id = ?', [userId], callback);
  },

  // Function to get registrations by event ID
  getRegistrationsByEventId: (eventId, callback) => {
    pool.query('SELECT * FROM Registrations WHERE event_id = ?', [eventId], callback);
  },

  // Function to get a registration by user ID and event ID (considering unique constraint)
  getRegistrationByUserAndEvent: (userId, eventId, callback) => {
    pool.query('SELECT * FROM Registrations WHERE user_id = ? AND event_id = ?', [userId, eventId], callback);
  }
};

module.exports = Registration;