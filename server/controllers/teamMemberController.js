const teamMemberModel = require('../models/teamMemberModel');

const teamMemberController = {
  // Get all team members
  getAllTeamMembers: async (req, res) => {
    try {
      const teamMembers = await teamMemberModel.getAllTeamMembers();
      res.json(teamMembers);
    } catch (error) {
      console.error('Error getting all team members:', error);
      res.status(500).send('Error retrieving team members');
    }
  },

  // Get team members by team ID
  getTeamMembersByTeamId: async (req, res) => {
    const teamId = req.params.teamId;
    try {
      const teamMembers = await teamMemberModel.getTeamMembersByTeamId(teamId);
      if (teamMembers.length === 0) {
        res.status(404).send('No team members found for this team');
      } else {
        res.json(teamMembers);
      }
    } catch (error) {
      console.error('Error getting team members by team ID:', error);
      res.status(500).send('Error retrieving team members for the team');
    }
  },

  // Get a specific team member by team member ID
  getTeamMemberById: async (req, res) => {
    const teamMemberId = req.params.teamMemberId;
    try {
      const teamMember = await teamMemberModel.getTeamMemberById(teamMemberId);
      if (!teamMember) {
        res.status(404).send('Team member not found');
      } else {
        res.json(teamMember);
      }
    } catch (error) {
      console.error('Error getting team member by ID:', error);
      res.status(500).send('Error retrieving team member');
    }
  },

  // Add a user to a team (using sp_add_user_to_team if desired, or direct insert)
  addTeamMember: async (req, res) => {
    const {
      team_id,
      user_id
    } = req.body;
    try {
      // You could potentially call a stored procedure here if needed,
      // or use the model to perform a direct insert.
      // Example using the model's direct insert function:
      const result = await teamMemberModel.addTeamMember(team_id, user_id);
      res.status(201).json({
        message: 'Team member added successfully',
        teamMemberId: result.insertId
      });
    } catch (error) {
      console.error('Error adding team member:', error);
      // Check if the error is due to the unique constraint
      if (error.code === 'ER_DUP_ENTRY') {
        res.status(409).send('User is already a member of this team.');
      } else {
        res.status(500).send('Error adding team member');
      }
    }
  },


  // Remove a team member (considering the trigger trg_prevent_last_team_member_deletion)
  removeTeamMember: async (req, res) => {
    const teamMemberId = req.params.teamMemberId;
    try {
      const result = await teamMemberModel.removeTeamMember(teamMemberId);
      if (result.affectedRows === 0) {
        res.status(404).send('Team member not found');
      } else {
        res.send('Team member removed successfully');
      }
    } catch (error) {
      console.error('Error removing team member:', error);
      // Check if the error is due to the trigger preventing deletion
      if (error.sqlState === '45000') {
        res.status(400).send(error.sqlMessage); // Send the trigger's error message
      } else {
        res.status(500).send('Error removing team member');
      }
    }
  },
};

module.exports = teamMemberController;