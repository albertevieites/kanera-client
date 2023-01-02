import { createContext, useContext, useState, useEffect } from 'react';

import { getExpensesService } from '../services/expenses.services';

const ExpenseContext = createContext();

const useExpense = () => {
	const context = useContext(ExpenseContext);
	return context;
};

function ExpenseWrapper({ children }) {
	const [expense, setExpense] = useState([]);

	useEffect(() => {
		getExpense();
	}, []);

	const getExpense = async () => {
		const response = await getExpensesService();
		setExpense(response.data);
	};

	return (
		<ExpenseContext.Provider
			value={{
				expense,
				getExpense,
			}}
		>
			{children}
		</ExpenseContext.Provider>
	);
}

export { ExpenseContext, ExpenseWrapper, useExpense };
