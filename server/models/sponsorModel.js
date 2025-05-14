const pool = require('../config/config');

const Sponsor = {
  getAllSponsors: (callback) => {
    pool.query('SELECT * FROM Sponsors', callback);
  },

  getSponsorById: (sponsorId, callback) => {
    pool.query('SELECT * FROM Sponsors WHERE sponsor_id = ?', [sponsorId], callback);
  },

  createSponsor: (newSponsor, callback) => {
    const { sponsor_name, contact_person, contact_email } = newSponsor;
    pool.query(
      'INSERT INTO Sponsors (sponsor_name, contact_person, contact_email) VALUES (?, ?, ?)',
      [sponsor_name, contact_person, contact_email],
      callback
    );
  },

  updateSponsor: (sponsorId, updatedSponsor, callback) => {
    const { sponsor_name, contact_person, contact_email } = updatedSponsor;
    pool.query(
      'UPDATE Sponsors SET sponsor_name = ?, contact_person = ?, contact_email = ? WHERE sponsor_id = ?',
      [sponsor_name, contact_person, contact_email, sponsorId],
      callback
    );
  },

  deleteSponsor: (sponsorId, callback) => {
    pool.query('DELETE FROM Sponsors WHERE sponsor_id = ?', [sponsorId], callback);
  },
};

module.exports = Sponsor;