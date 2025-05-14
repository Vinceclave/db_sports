const teamModel = require('../models/teamModel');

// Get all teams
exports.getAllTeams = async (req, res) => {
  try {
    const teams = await teamModel.getAllTeams();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single team by ID
exports.getTeamById = async (req, res) => {
  try {
    const team = await teamModel.getTeamById(req.params.id);
    if (team) {
      res.json(team);
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new team
exports.createTeam = async (req, res) => {
  try {
    const result = await teamModel.createTeam(req.body);
    res.status(201).json({ team_id: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a team by ID
exports.updateTeam = async (req, res) => {
  try {
    const updated = await teamModel.updateTeam(req.params.id, req.body);
    if (updated) {
      res.json({ message: 'Team updated successfully' });
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a team by ID
exports.deleteTeam = async (req, res) => {
  try {
    const deleted = await teamModel.deleteTeam(req.params.id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};