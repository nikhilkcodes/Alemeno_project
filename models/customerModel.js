
const db = require('../database');

async function createCustomer(customerData) {
	try {
		const { first_name, last_name, age, monthly_income, phone_number, approved_limit, current_debt } = customerData;
		const query = 'INSERT INTO customers (first_name, last_name, age, monthly_income, phone_number, approved_limit, current_debt) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
		const values = [first_name, last_name, age, monthly_income, phone_number, approved_limit, current_debt];
		const { rows } = await db.query(query, values);
		return rows[0];
	} catch (error) {
		throw error;
	}
}

module.exports = {
	createCustomer
};
