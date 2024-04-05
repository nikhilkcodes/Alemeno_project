const db = require('../database');
async function createLoan(loanData) {
	try {
		const { customer_id, loan_amount, interest_rate, tenure } = loanData;
		const query = 'INSERT INTO loans (customer_id, loan_amount, interest_rate, tenure) VALUES ($1, $2, $3, $4) RETURNING *';
		const values = [customer_id, loan_amount, interest_rate, tenure];
		const { rows } = await db.query(query, values);
		return rows[0];
	} catch (error) {
		throw error;
	}
}

module.exports = {
	createLoan
};
