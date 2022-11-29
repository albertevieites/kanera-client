import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import EditableRowExpense from '../../components/EditableRowExpense/EditableRowExpense';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import ReadRowExpense from '../../components/ReadRowExpense/ReadRowExpense';

// Import Services
import { getExpensesService } from '../../services/expenses.services';

const Expenses = () => {
	const navigate = useNavigate();
	const [allExpenses, setAllExpenses] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	const [editExpenseId, setEditExpenseId] = useState(null);

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

	if (isFetching === true) {
		return <h3>... is Loading</h3>;
	}

	// Sum
	const sum = allExpenses.reduce((prev, curr) => prev + curr.amount, 0);

	// Handle Edit Row
	const handleEditClick = (event, expense) => {
		event.preventDefault();
		setEditExpenseId(expense.id);
	}

	return (
		<div className='expenses'>
			<h1>Expenses</h1>

			<ExpenseForm getExpenses={getExpenses} />

			<div className='expenses__container'>
				<div className='expenses__list'>
					<form>
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
										<Fragment>
											{editExpenseId === eachExpense.id ? (
												<EditableRowExpense />
											) : (
												<ReadRowExpense
													eachExpense={eachExpense}
													key={eachExpense._id}
													handleEditClick={handleEditClick} 
												/>
											)}
										</Fragment>
									);
								})}
							</tbody>
						</table>
					</form>
				</div>
				<div className='expenses__total'>
					<h1>£{sum}</h1>
				</div>
			</div>
		</div>
	);
};

export default Expenses;
