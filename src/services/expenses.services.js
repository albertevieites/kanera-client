import axios from 'axios';

const service = axios.create({
	baseURL: 'http://localhost:5005/api',
});

const getExpensesService = () => {
	return service.get('/expenses');
};

const addExpensesService = (newExpense) => {
	return service.post('/expenses', newExpense);
};

export {
	getExpensesService,
	addExpensesService
};
