import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { deleteExpenseService, getExpenseDetailsService } from '../../services/expenses.services';

const ExpensesDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [singleExpense, setSingleExpense] = useState(null);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		getSingleExpense();
	}, []);

	const getSingleExpense = async () => {
		try {
			const response = await getExpenseDetailsService(id);
			console.log(response.data);
			setSingleExpense(response.data);
			setIsFetching(false);
		} catch (error) {
			navigate('/error');
		}
	};

	const handleDelete = async () => {
		try {
			await deleteExpenseService(id);
			navigate("/expenses");
		} catch (error) {
			navigate("/error")
		}
	};

	if (isFetching === true) {
		return <h3>... is Loading</h3>;
	}

	const { date, description, category, method, amount } = singleExpense;

	return (
		<div className='expenses--details'>
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
					<tr>
						<td>{date}</td>
						<td>{description}</td>
						<td>{category}</td>
						<td>{method}</td>
						<td>{amount}</td>
						<td>
							<button onClick={handleDelete}>Delete</button>
							<Link to={`/expenses`}>Edit</Link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ExpensesDetails;
