const CustomerModel = require('../models/customerModel')

async function registerCustomer(req, res) {
	try {
		const { first_name, last_name, age, monthly_income, phone_number } = req.body;

		const approved_lim = Math.round(36 * monthly_income / 100000) * 100000;

		const customer = await CustomerModel.createCustomer({
			first_name,
			last_name,
			age,
			monthly_income,
			phone_number,
			approved_lim,
			current_debt: 0
		})

		res.status(201).json(customer);

	} catch (error) {
		console.error('Error registering customer:', error);
		res.status(500).json({ error: 'Server Error' });
	}
}

module.exports = {
	registerCustomer
};
