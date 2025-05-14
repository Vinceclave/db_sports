const pool = require('../config/config'); // Assuming your mysql2 connection pool is exported from here

const Event = {
  getAllEvents: () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM Events', (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  getEventById: (eventId) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM Events WHERE event_id = ?', [eventId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0]); // Assuming event_id is unique, return the first row
      });
    });
  },

  createEvent: (newEvent) => {
    const { event_name, event_date, venue_id, sport_id, description, capacity } = newEvent;
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO Events (event_name, event_date, venue_id, sport_id, description, capacity) VALUES (?, ?, ?, ?, ?, ?)',
        [event_name, event_date, venue_id, sport_id, description, capacity],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve({ id: results.insertId, ...newEvent }); // Return the inserted event with its ID
        }
      );
    });
  },

  updateEvent: (eventId, updatedEvent) => {
    const { event_name, event_date, venue_id, sport_id, description, capacity } = updatedEvent;
    return new Promise((resolve, reject) => {
      pool.query(
        'UPDATE Events SET event_name = ?, event_date = ?, venue_id = ?, sport_id = ?, description = ?, capacity = ? WHERE event_id = ?',
        [event_name, event_date, venue_id, sport_id, description, capacity, eventId],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results); // Results object will contain information about affected rows
        }
      );
    });
  },

  deleteEvent: (eventId) => {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM Events WHERE event_id = ?', [eventId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results); // Results object will contain information about affected rows
      });
    });
  },
};

module.exports = Event;