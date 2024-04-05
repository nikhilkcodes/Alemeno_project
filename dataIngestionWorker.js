const { parseExcel } = require('./excelParser');
const CustomerModel = require('./models/customerModel');
const LoanModel = require('./models/loanModel');

async function ingestCustomerData(filePath) {
	try {
		const customerData = parseExcel(filePath);

		for (const customer of customerData) {
			await CustomerModel.createCustomer({
				first_name: customer.first_name,
				last_name: customer.last_name,
				age: customer.age,
				monthly_income: customer.monthly_income,
				phone_number: customer.phone_number,
				approved_limit: customer.approved_limit,
				current_debt: customer.current_debt
			});
		}

		console.log('Customer data ingestion complete.');
	} catch (error) {
		console.error('Error ingesting customer data:', error);
	}
}

async function ingestLoanData(filePath) {
	try {
		const loanData = parseExcel(filePath);

		for (const loan of loanData) {
			await LoanModel.createLoan({
				customer_id: loan.customer_id,
				loan_amount: loan.loan_amount,
				interest_rate: loan.interest_rate,
				tenure: loan.tenure
			});
		}

		console.log('Loan data ingestion complete.');
	} catch (error) {
		console.error('Error ingesting loan data:', error);
	}
}


async function runDataIngestion() {
	await ingestCustomerData('./data/customer_data.xlsx');
	await ingestLoanData('./data/loan_data.xlsx');
}

runDataIngestion();
