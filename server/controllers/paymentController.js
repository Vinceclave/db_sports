const db = require('../models');
const Payment = db.Payment;

// Get all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Some error occurred while retrieving payments.'
    });
  }
};

// Get a single payment by ID
exports.getPaymentById = async (req, res) => {
  const id = req.params.id;

  try {
    const payment = await Payment.findByPk(id);
    if (payment) {
      res.status(200).json(payment);
    } else {
      res.status(404).json({
        message: `Cannot find Payment with id=${id}.`
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Error retrieving Payment with id=' + id
    });
  }
};

// Create a new payment
exports.createPayment = async (req, res) => {
  // Validate request
  if (!req.body.registration_id || !req.body.amount) {
    res.status(400).json({
      message: 'Registration ID and amount are required fields!'
    });
    return;
  }

  // Create a Payment
  const payment = {
    registration_id: req.body.registration_id,
    amount: req.body.amount,
    payment_method: req.body.payment_method
  };

  try {
    const data = await Payment.create(payment);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Some error occurred while creating the Payment.'
    });
  }
};

// Update a payment by ID
exports.updatePayment = async (req, res) => {
  const id = req.params.id;

  try {
    const num = await Payment.update(req.body, {
      where: {
        payment_id: id
      }
    });

    if (num == 1) {
      res.status(200).json({
        message: 'Payment was updated successfully.'
      });
    } else {
      res.status(404).json({
        message: `Cannot update Payment with id=${id}. Maybe Payment was not found or req.body is empty!`
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Error updating Payment with id=' + id
    });
  }
};

// Delete a payment by ID
exports.deletePayment = async (req, res) => {
  const id = req.params.id;

  try {
    const num = await Payment.destroy({
      where: {
        payment_id: id
      }
    });

    if (num == 1) {
      res.status(200).json({
        message: 'Payment was deleted successfully!'
      });
    } else {
      res.status(404).json({
        message: `Cannot delete Payment with id=${id}. Maybe Payment was not found!`
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Could not delete Payment with id=' + id
    });
  }
};