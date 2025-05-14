const pool = require('../config/config');

const Sport = {
  getAllSports: () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM Sports', (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  getSportById: (sportId) => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM Sports WHERE sport_id = ?', [sportId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0]); // Assuming unique sport_id
      });
    });
  },

  createSport: (newSport) => {
    return new Promise((resolve, reject) => {
      const { sport_name } = newSport;
      pool.query('INSERT INTO Sports (sport_name) VALUES (?)', [sport_name], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  updateSport: (sportId, updatedSport) => {
    return new Promise((resolve, reject) => {
      const { sport_name } = updatedSport;
      pool.query('UPDATE Sports SET sport_name = ? WHERE sport_id = ?', [sport_name, sportId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  deleteSport: (sportId) => {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM Sports WHERE sport_id = ?', [sportId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }
};

module.exports = Sport;

