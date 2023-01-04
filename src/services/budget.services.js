import service from './config.services';

// GET Budget
const getBudgetService = () => {
	return service.get('/budget');
};

// POST Budget
const addBudgetService = (newBudget) => {
	return service.post('/budget', newBudget);
};

// UPDATE Single Budget
const updateBudgetService = (id, budgetObj) => {
	return service.patch(`/budget/${id}`, budgetObj);
};

export { getBudgetService, addBudgetService, updateBudgetService };
