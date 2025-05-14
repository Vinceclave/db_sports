const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// GET all teams
router.get('/', teamController.getAllTeams);

// GET a single team by id
router.get('/:id', teamController.getTeamById);

// CREATE a new team
router.post('/', teamController.createTeam);

// UPDATE a team by id
router.put('/:id', teamController.updateTeam);

// DELETE a team by id
router.delete('/:id', teamController.deleteTeam);

module.exports = router;