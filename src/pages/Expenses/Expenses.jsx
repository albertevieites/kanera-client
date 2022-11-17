import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';

const Expenses = () => {
	const [allExpenses, setAllExpenses] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	const navigate = useNavigate();
	const api = 'http://localhost:5005/api/expenses';

	useEffect(() => {
		getExpenses();
	}, []);

	const getExpenses = () => {
		axios
			.get(api)
			.then(res => {
				console.log(res.data);
				setAllExpenses(res.data);
				setIsFetching(false);
			})
			.catch(err => {
				console.error(err);
				navigate('/error');
			});
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
					<span>Name</span>
					<span>Category</span>
					<span>Payment Method</span>
					<span>Amount</span>
				</div>

				{allExpenses.map(eachExpense => {
					return (
						<div className='expenses__content' key={eachExpense._id}>
							<div>{eachExpense.date}</div>
							<div>{eachExpense.name}</div>
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
