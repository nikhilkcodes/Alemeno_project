const PaymentModel = require('../models/paymentModel');

async function makePayment(req, res) {
	try {
		const { customer_id, loan_id } = req.params;
		const { amount_paid } = req.body;
		await PaymentModel.makePayment(customer_id, loan_id, amount_paid);

		res.status(200).json({ message: 'Payment successful' });
	} catch (error) {
		console.error('Error making payment:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

module.exports = {
	makePayment
};
