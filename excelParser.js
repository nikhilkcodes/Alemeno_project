const xlsx = require('xlsx');

function parseExcel(filePath) {
	try {
		const workbook = xlsx.readFile(filePath);
		const worksheet = workbook.Sheets[workbook.SheetNames[0]];
		const jsonData = xlsx.utils.sheet_to_json(worksheet);
		return jsonData;
	} catch (error) {
		console.error('Error parsing Excel file:', error);
		throw error;
	}
}

module.exports = {
	parseExcel
};
