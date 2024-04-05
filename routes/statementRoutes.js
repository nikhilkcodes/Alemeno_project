const express = require('express');
const router = express.Router();
const statementController = require('../controllers/statementController');

router.get('/view-statement/:customer_id/:loan_id', statementController.viewStatement);

module.exports = router;
