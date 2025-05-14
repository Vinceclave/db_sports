const express = require('express');
const router = express.Router();
const sponsorController = require('../controllers/sponsorController');

// GET all sponsors
router.get('/', sponsorController.getAllSponsors);

// GET a single sponsor by ID
router.get('/:id', sponsorController.getSponsorById);

// CREATE a new sponsor
router.post('/', sponsorController.createSponsor);

// UPDATE a sponsor by ID
router.put('/:id', sponsorController.updateSponsor);

// DELETE a sponsor by ID
router.delete('/:id', sponsorController.deleteSponsor);

module.exports = router;