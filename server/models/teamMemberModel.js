const pool = require('../config/config');

const TeamMember = {
  getAllTeamMembers: (callback) => {
    const query = 'SELECT * FROM Team_Members';
    pool.query(query, (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  },

  getTeamMemberById: (teamMemberId, callback) => {
    const query = 'SELECT * FROM Team_Members WHERE team_member_id = ?';
    pool.query(query, [teamMemberId], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results[0]);
    });
  },

  addTeamMember: (teamMemberData, callback) => {
    const { team_id, user_id } = teamMemberData;
    const query = 'INSERT INTO Team_Members (team_id, user_id) VALUES (?, ?)';
    pool.query(query, [team_id, user_id], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results.insertId);
    });
  },

  removeTeamMember: (teamMemberId, callback) => {
    const query = 'DELETE FROM Team_Members WHERE team_member_id = ?';
    pool.query(query, [teamMemberId], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results.affectedRows);
    });
  },

  getTeamMembersByTeamId: (teamId, callback) => {
    const query = 'SELECT * FROM Team_Members WHERE team_id = ?';
    pool.query(query, [teamId], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  },

  getTeamMembersByUserId: (userId, callback) => {
    const query = 'SELECT * FROM Team_Members WHERE user_id = ?';
    pool.query(query, [userId], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  },
};

module.exports = TeamMember;