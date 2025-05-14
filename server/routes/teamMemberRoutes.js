 const express = require('express');
const router = express.Router();
const teamMemberController = require('../controllers/teamMemberController');

// Get all team members
router.get('/', teamMemberController.getAllTeamMembers);

// Get a single team member by ID
router.get('/:id', teamMemberController.getTeamMemberById);

// Add a team member
router.post('/', teamMemberController.createTeamMember);

// Update a team member by ID
router.put('/:id', teamMemberController.updateTeamMember);

// Delete a team member by ID
router.delete('/:id', teamMemberController.deleteTeamMember);

module.exports = router;