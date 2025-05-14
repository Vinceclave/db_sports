const express = require('express');
const router = express.Router();
const sportController = require('../controllers/sportController');

// GET all sports
router.get('/', sportController.getAllSports);

// GET a single sport by id
router.get('/:id', sportController.getSportById);

// POST a new sport
router.post('/', sportController.createSport);

// PUT update a sport by id
router.put('/:id', sportController.updateSport);

// DELETE a sport by id
router.delete('/:id', sportController.deleteSport);

module.exports = router;