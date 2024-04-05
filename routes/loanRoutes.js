const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
router.post('/create-loan', loanController.createLoan);

module.exports = router;
