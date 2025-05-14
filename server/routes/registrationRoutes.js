const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

// GET all registrations
router.get('/', registrationController.getAllRegistrations);

// GET a single registration by ID
router.get('/:id', registrationController.getRegistrationById);

// POST a new registration
router.post('/', registrationController.createRegistration);

// PUT update a registration by ID
router.put('/:id', registrationController.updateRegistration);

// DELETE a registration by ID
router.delete('/:id', registrationController.deleteRegistration);

module.exports = router;