const db = require('../models');
const Registration = db.Registration;

// Get all registrations
exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.findAll();
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Some error occurred while retrieving registrations.'
    });
  }
};

// Get a single registration by ID
exports.getRegistrationById = async (req, res) => {
  const id = req.params.id;

  try {
    const registration = await Registration.findByPk(id);
    if (registration) {
      res.status(200).json(registration);
    } else {
      res.status(404).json({
        message: `Cannot find Registration with id=${id}.`
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving Registration with id=' + id
    });
  }
};

// Create a new registration
exports.createRegistration = async (req, res) => {
  // Validate request
  if (!req.body.user_id || !req.body.event_id) {
    res.status(400).json({
      message: 'User ID and Event ID cannot be empty!'
    });
    return;
  }

  // Create a registration
  const registration = {
    user_id: req.body.user_id,
    event_id: req.body.event_id,
    status: req.body.status || 'pending' // Default status to 'pending' if not provided
  };

  // Save Registration in the database
  try {
    const data = await Registration.create(registration);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Some error occurred while creating the Registration.'
    });
  }
};

// Update a registration by ID
exports.updateRegistration = async (req, res) => {
  const id = req.params.id;

  try {
    const [num] = await Registration.update(req.body, {
      where: {
        registration_id: id
      }
    });

    if (num === 1) {
      res.status(200).json({
        message: 'Registration was updated successfully.'
      });
    } else {
      res.status(404).json({
        message: `Cannot update Registration with id=${id}. Maybe Registration was not found or req.body is empty!`
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error updating Registration with id=' + id
    });
  }
};

// Delete a registration by ID
exports.deleteRegistration = async (req, res) => {
  const id = req.params.id;

  try {
    const num = await Registration.destroy({
      where: {
        registration_id: id
      }
    });

    if (num === 1) {
      res.status(200).json({
        message: 'Registration was deleted successfully!'
      });
    } else {
      res.status(404).json({
        message: `Cannot delete Registration with id=${id}. Maybe Registration was not found!`
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Could not delete Registration with id=' + id
    });
  }
};