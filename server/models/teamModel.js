const pool = require('../config/config');

const Team = {
  getAllTeams: (callback) => {
    const query = 'SELECT * FROM Teams';
    pool.query(query, callback);
  },

  getTeamById: (teamId, callback) => {
    const query = 'SELECT * FROM Teams WHERE team_id = ?';
    pool.query(query, [teamId], callback);
  },

  createTeam: (team, callback) => {
    const query = 'INSERT INTO Teams (team_name, sport_id) VALUES (?, ?)';
    pool.query(query, [team.team_name, team.sport_id], callback);
  },

  updateTeam: (teamId, team, callback) => {
    const query = 'UPDATE Teams SET team_name = ?, sport_id = ? WHERE team_id = ?';
    pool.query(query, [team.team_name, team.sport_id, teamId], callback);
  },

  deleteTeam: (teamId, callback) => {
    const query = 'DELETE FROM Teams WHERE team_id = ?';
    pool.query(query, [teamId], callback);
  }
};

module.exports = Team;