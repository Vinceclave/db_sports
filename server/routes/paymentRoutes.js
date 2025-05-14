const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// GET all payments
router.get('/', paymentController.getAllPayments);

// GET a single payment by ID
router.get('/:id', paymentController.getPaymentById);

// CREATE a new payment
router.post('/', paymentController.createPayment);

// UPDATE a payment by ID
router.put('/:id', paymentController.updatePayment);

// DELETE a payment by ID
router.delete('/:id', paymentController.deletePayment);

module.exports = router;