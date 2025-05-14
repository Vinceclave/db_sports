const db = require('../models');
const Team = db.Team;

// Get all teams
exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.findAll();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single team by ID
exports.getTeamById = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (team) {
      res.status(200).json(team);
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
    const team = await Team.create(req.body);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a team by ID
exports.updateTeam = async (req, res) => {
  try {
    const [updated] = await Team.update(req.body, {
      where: { team_id: req.params.id }
    });
    if (updated) {
      const updatedTeam = await Team.findByPk(req.params.id);
      res.status(200).json(updatedTeam);
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
    const deleted = await Team.destroy({
      where: { team_id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};