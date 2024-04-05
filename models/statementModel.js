const db = require('../database');
async function getStatement(customer_id, loan_id) {
	try {
		const query = 'SELECT * FROM payments WHERE customer_id = $1 AND loan_id = $2';
		const values = [customer_id, loan_id];
		const { rows } = await db.query(query, values);
		return rows;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	getStatement
};
