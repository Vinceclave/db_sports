const {
  Event,
  Venue,
  Sport
} = require('../models'); // Assuming models are in ../models

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      include: [{
        model: Venue
      }, {
        model: Sport
      }]
    });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, {
      include: [{
        model: Venue
      }, {
        model: Sport
      }]
    });
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({
        message: 'Event not found'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const updateEvent = async (req, res) => {
  try {
    const [updated] = await Event.update(req.body, {
      where: {
        event_id: req.params.id
      }
    });
    if (updated) {
      const updatedEvent = await Event.findByPk(req.params.id);
      res.status(200).json(updatedEvent);
    } else {
      res.status(404).json({
        message: 'Event not found'
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const deleted = await Event.destroy({
      where: {
        event_id: req.params.id
      }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({
        message: 'Event not found'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};