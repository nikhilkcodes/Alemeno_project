const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentContoller');

router.post('/make-payment/:customer_id/:loan_id', paymentController.makePayment);

module.exports = router;
