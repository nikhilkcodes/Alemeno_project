const db = require('../database');
async function makePayment(customer_id, loan_id, amount_paid) {
	try {
		const query = 'INSERT INTO payments (customer_id, loan_id, amount_paid) VALUES ($1, $2, $3)';
		const values = [customer_id, loan_id, amount_paid];
		await db.query(query, values);
	} catch (error) {
		throw error;
	}
}

module.exports = {
	makePayment
};
