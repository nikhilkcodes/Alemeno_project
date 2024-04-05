const StatementModel = require('../models/statementModel');
async function viewStatement(req, res) {
	try {
		const { customer_id, loan_id } = req.params;
		const statement = await StatementModel.getStatement(customer_id, loan_id);

		res.status(200).json(statement);
	} catch (error) {
		console.error('Error viewing statement:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

module.exports = {
	viewStatement
};
