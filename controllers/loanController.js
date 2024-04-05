const LoanModel = require('../models/loanModel');
async function createLoan(req, res) {
	try {
		const { customer_id, loan_amount, interest_rate, tenure } = req.body;

		const loan = await LoanModel.createLoan({
			customer_id,
			loan_amount,
			interest_rate,
			tenure
		});

		res.status(201).json(loan);
	} catch (error) {
		console.error('Error creating loan:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

module.exports = {
	createLoan
};
