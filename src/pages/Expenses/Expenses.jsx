import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import Services
import {
	deleteExpenseService,
	getExpensesService,
} from '../../services/expenses.services';

// Components
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';

// Format dates
import moment from 'moment';

// Currency Formatter
import { currencyFormatter } from '../../utils/currency';

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
			setAllExpenses(response.data);
			console.log(response.data);
			setIsFetching(false);
		} catch (err) {
			navigate('/error');
		}
	};

	// Delete single expense
	const handleDelete = async (id) => {
		try {
			await deleteExpenseService(id);
			getExpenses();
		} catch (error) {
			navigate('/error');
		}
	};

	// Sum
	const sum = allExpenses.reduce((prev, curr) => prev + curr.amount, 0);

	if (isFetching === true) {
		return <h3>... is Loading</h3>;
	}

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
										<td>{moment(eachExpense.date).format('DD-MM-yyyy')}</td>
										<td>{eachExpense.description}</td>
										<td>{eachExpense.category}</td>
										<td>{eachExpense.method}</td>
										<td>{currencyFormatter.format(eachExpense.amount)}</td>
										<td>
											<button onClick={() => handleDelete(eachExpense._id)}>
												Delete
											</button>
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
					<h1>{currencyFormatter.format(sum)}</h1>
				</div>
			</div>
		</div>
	);
};

export default Expenses;
