import { createContext, useContext, useEffect, useState } from 'react';

import { getIncomeService } from '../services/income.services';

const IncomeContext = createContext();

const useIncome = () => {
	const context = useContext(IncomeContext);
	return context;
};

function IncomeWrapper({ children }) {
	const [income, setIncome] = useState([]);

	useEffect(() => {
		getIncome();
	}, []);

	const getIncome = async () => {
		const response = await getIncomeService();
		setIncome(response.data);
	};

	return (
		<IncomeContext.Provider
			value={{
				income,
				getIncome,
			}}
		>
			{children}
		</IncomeContext.Provider>
	);
}

export { IncomeContext, IncomeWrapper, useIncome };
