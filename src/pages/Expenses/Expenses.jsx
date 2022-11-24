import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';

// Import Services
import { getExpensesService } from '../../services/expenses.services';

// Espenses List function
const Expenses = () => {
	const navigate = useNavigate();
	const [allExpenses, setAllExpenses] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		getExpenses();
	}, []);

	const getExpenses = async () => {
			try {

				const response = await getExpensesService();
				console.log(response.data)
				setAllExpenses(response.data)
				setIsFetching(false);
			} catch (err) {
				navigate('/error');
			}
	};

	if (isFetching === true) {
		return <h3>... is Loading</h3>;
	}

	return (
		<div className='expenses'>
			<h1>Expenses</h1>

			<ExpenseForm getExpenses={getExpenses}/>

			<div className='expenses__list'>
				<h2>Expenses List</h2>

				<div className='expenses__head'>
					<span>Date</span>
					<span>Description</span>
					<span>Category</span>
					<span>Payment Method</span>
					<span>Amount</span>
				</div>

				{allExpenses.map(eachExpense => {
					return (
						<div className='expenses__content' key={eachExpense._id}>
							<div>{eachExpense.date}</div>
							<div>{eachExpense.description}</div>
							<div>{eachExpense.category}</div>
							<div>{eachExpense.method}</div>
							<div>- £{eachExpense.amount}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Expenses;
