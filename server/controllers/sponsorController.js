const sponsorModel = require('../models/sponsorModel');

// Get all sponsors
exports.getAllSponsors = async (req, res) => {
  try {
    const sponsors = await sponsorModel.getAllSponsors();
    res.status(200).json(sponsors);
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Some error occurred while retrieving sponsors.',
    });
  }
};

// Get a single sponsor by ID
exports.getSponsorById = async (req, res) => {
  const id = req.params.id;

  try {
    const sponsor = await sponsorModel.getSponsorById(id);
    if (sponsor) {
      res.status(200).json(sponsor);
    } else {
      res.status(404).json({
        message: `Cannot find Sponsor with id=${id}.`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving Sponsor with id=' + id,
    });
  }
};

// Create a new sponsor
exports.createSponsor = async (req, res) => {
  // Validate request
  if (!req.body.sponsor_name) {
    res.status(400).json({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a Sponsor
  const sponsor = {
    sponsor_name: req.body.sponsor_name,
    contact_person: req.body.contact_person,
    contact_email: req.body.contact_email,
  };

  try {
    const data = await sponsorModel.createSponsor(sponsor);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Some error occurred while creating the Sponsor.',
    });
  }
};

// Update a sponsor by ID
exports.updateSponsor = async (req, res) => {
  const id = req.params.id;

  try {
    const num = await sponsorModel.updateSponsor(id, req.body);

    if (num == 1) {
      res.status(200).json({
        message: 'Sponsor was updated successfully.',
      });
    } else {
      res.status(404).json({
        message: `Cannot update Sponsor with id=${id}. Maybe Sponsor was not found or req.body is empty!`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error updating Sponsor with id=' + id,
    });
  }
};

// Delete a sponsor by ID
exports.deleteSponsor = async (req, res) => {
  const id = req.params.id;

  try {
    const num = await sponsorModel.deleteSponsor(id);

    if (num == 1) {
      res.status(200).json({
        message: 'Sponsor was deleted successfully!',
      });
    } else {
      res.status(404).json({
        message: `Cannot delete Sponsor with id=${id}. Maybe Sponsor was not found!`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Could not delete Sponsor with id=' + id,
    });
  }
};