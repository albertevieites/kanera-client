import axios from 'axios';

const service = axios.create({
	baseURL: 'http://localhost:5005/api',
});

// GET all Income
const getIncomeService = () => {
	return service.get('/income');
};

// GET details from single income
const getIncomeDetailsService = (id) => {
	return service.get(`/income/${id}`);
};

// POST Income
const addIncomeService = (newIncome) => {
	return service.post('/income', newIncome);
};

// DELETE single income
const deleteIncomeService = (id) => {
	return service.delete(`/income/${id}`);
};

// UPDATE single income
const updateIncomeService = (id, incomeObj) => {
	return service.patch(`/income/${id}`, incomeObj);
};

export {
	getIncomeService,
	getIncomeDetailsService,
	addIncomeService,
	deleteIncomeService,
	updateIncomeService,
};
