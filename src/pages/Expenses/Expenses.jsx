import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import Services
import { getExpensesService } from '../../services/expenses.services';

// Components
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';

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
			console.log(response.data);
			setAllExpenses(response.data);
			setIsFetching(false);
		} catch (err) {
			navigate('/error');
		}
	};

	/* const handleDelete = async () => {
		try {
			await deleteExpenseService(id);
			getExpenses();
		} catch (error) {
			navigate('/error');
		}
	}; */

	if (isFetching === true) {
		return <h3>... is Loading</h3>;
	}

	// Sum
	const sum = allExpenses.reduce((prev, curr) => prev + curr.amount, 0);

	return (
		<div className='expenses'>
			<h1>Expenses</h1>

			<ExpenseForm getExpenses={getExpenses} />

			<div className='expenses__container'>
				<div className='expenses__list'>
					<table>
						<thead>
							<tr>
								<th>Date</th>
								<th>Description</th>
								<th>Category</th>
								<th>Payment Method</th>
								<th>Amount</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>
							{allExpenses.map((eachExpense) => {
								return (
									<tr key={eachExpense._id}>
										<td>{eachExpense.date}</td>
										<td>{eachExpense.description}</td>
										<td>{eachExpense.category}</td>
										<td>{eachExpense.method}</td>
										<td>£{eachExpense.amount}</td>
										<td>
											<button>Delete</button>
											<Link to={`/expenses/edit/${eachExpense._id}`}>
												<button>Edit</button>
											</Link>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>

				<div className='expenses__total'>
					<h1>£{sum}</h1>
				</div>
			</div>
		</div>
	);
};

export default Expenses;
