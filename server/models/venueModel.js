const pool = require('../config/config');

const Venue = {
  getAllVenues: (callback) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM Venues', (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  getVenueById: (venueId, callback) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM Venues WHERE venue_id = ?', [venueId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0]); // Assuming venue_id is unique
      });
    });
  },

  createVenue: (newVenue, callback) => {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO Venues SET ?', newVenue, (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve({ venue_id: result.insertId, ...newVenue });
      });
    });
  },

  updateVenue: (venueId, updatedVenue, callback) => {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE Venues SET ? WHERE venue_id = ?', [updatedVenue, venueId], (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result.affectedRows > 0);
      });
    });
  },

  deleteVenue: (venueId, callback) => {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM Venues WHERE venue_id = ?', [venueId], (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result.affectedRows > 0);
      });
    });
  }
};

module.exports = Venue;