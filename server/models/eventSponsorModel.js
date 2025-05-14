const pool = require('../config/config');

const EventSponsor = {
  /**
   * Add a sponsor to an event.
   * @param {number} eventId - The ID of the event.
   * @param {number} sponsorId - The ID of the sponsor.
   * @returns {Promise<object>} - A promise that resolves with the result of the insertion.
   */
  addSponsorToEvent: async (eventId, sponsorId) => {
    const query = 'INSERT INTO Event_Sponsors (event_id, sponsor_id) VALUES (?, ?)';
    const [rows] = await pool.execute(query, [eventId, sponsorId]);
    return rows;
  },

  /**
   * Remove a sponsor from an event.
   * @param {number} eventId - The ID of the event.
   * @param {number} sponsorId - The ID of the sponsor.
   * @returns {Promise<object>} - A promise that resolves with the result of the deletion.
   */
  removeSponsorFromEvent: async (eventId, sponsorId) => {
    const query = 'DELETE FROM Event_Sponsors WHERE event_id = ? AND sponsor_id = ?';
    const [rows] = await pool.execute(query, [eventId, sponsorId]);
    return rows;
  },

  /**
   * Get all sponsors for a specific event.
   * @param {number} eventId - The ID of the event.
   * @returns {Promise<Array<object>>} - A promise that resolves with an array of sponsors.
   */
  getSponsorsForEvent: async (eventId) => {
    const query = `
      SELECT s.sponsor_id, s.sponsor_name, s.contact_person, s.contact_email
      FROM Sponsors s
      JOIN Event_Sponsors es ON s.sponsor_id = es.sponsor_id
      WHERE es.event_id = ?
    `;
    const [rows] = await pool.execute(query, [eventId]);
    return rows;
  },

  /**
   * Get all events for a specific sponsor.
   * @param {number} sponsorId - The ID of the sponsor.
   * @returns {Promise<Array<object>>} - A promise that resolves with an array of events.
   */
  getEventsForSponsor: async (sponsorId) => {
    const query = `
      SELECT e.event_id, e.event_name, e.event_date, e.venue_id, e.sport_id, e.description, e.capacity
      FROM Events e
      JOIN Event_Sponsors es ON e.event_id = es.event_id
      WHERE es.sponsor_id = ?
    `;
    const [rows] = await pool.execute(query, [sponsorId]);
    return rows;
  }
};

module.exports = EventSponsor;