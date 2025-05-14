const eventModel = require('../models/eventModel');

const getAllEvents = async (req, res) => {
  try {
    const events = await eventModel.getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await eventModel.getEventById(req.params.id);
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
    const event = await eventModel.createEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const updateEvent = async (req, res) => {
  try {
    const updated = await eventModel.updateEvent(req.params.id, req.body);    
    if (updated) {
      // Assuming updateEvent model function returns the updated event or its ID
      const updatedEvent = await eventModel.getEventById(req.params.id); 
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
    const deleted = await eventModel.deleteEvent(req.params.id);
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