import service from './config.services';

// GET Expenses
const getExpensesService = () => {
	return service.get('/expenses');
};

// GET details from single expense
const getExpenseDetailsService = (id) => {
	return service.get(`/expenses/${id}`);
};

// POST Expenses
const addExpensesService = (newExpense) => {
	return service.post('/expenses', newExpense);
};

// DELETE Single Expense
const deleteExpenseService = (id) => {
	return service.delete(`/expenses/${id}`);
};

// UPDATE Single Expense
const updateExpenseService = (id, expenseObj) => {
	return service.patch(`/expenses/${id}`, expenseObj);
};

export {
	getExpensesService,
	getExpenseDetailsService,
	addExpensesService,
	deleteExpenseService,
	updateExpenseService,
};
