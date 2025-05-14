const pool = require('../config/config');

const Payment = {
  getAllPayments: (callback) => {
    pool.query('SELECT * FROM Payments', callback);
  },

  getPaymentById: (paymentId, callback) => {
    pool.query('SELECT * FROM Payments WHERE payment_id = ?', [paymentId], callback);
  },

  createPayment: (newPayment, callback) => {
    pool.query('INSERT INTO Payments SET ?', newPayment, callback);
  },

  updatePayment: (paymentId, updatedPayment, callback) => {
    pool.query('UPDATE Payments SET ? WHERE payment_id = ?', [updatedPayment, paymentId], callback);
  },

  deletePayment: (paymentId, callback) => {
    pool.query('DELETE FROM Payments WHERE payment_id = ?', [paymentId], callback);
  }
};

module.exports = Payment;