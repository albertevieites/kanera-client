import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useExpense } from '../../context/ExpenseContext';
import { getBudgetService } from '../../services/budget.services';

import { currencyFormatter } from '../../utils/currency';

import CategoryBudget from '../../components/CategoryBudget/CategoryBudget';

const Budget = () => {
	const { expense, getExpense } = useExpense();

	const navigate = useNavigate();

	const [budget, setBudget] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		getBudget();
		getExpense();
	}, []);

	const getBudget = async () => {
		try {
			const response = await getBudgetService();
			setBudget(response.data);
			setIsFetching(false);
		} catch (err) {
			navigate('/error');
		}
	};

	// * Filter expense by current month
	const filteredExpense = expense.filter((element) => {
		// Current Date
		const currentDate = new Date().toJSON();
		const slicedCurrentDate = currentDate.slice(0, 7);

		// Date from database
		const slicedElement = element.date.slice(0, 7);

		if (slicedElement === slicedCurrentDate) {
			return element;
		}
		return false;
	});

	// Fetching
	if (isFetching === true) {
		return <h3>... is Loading</h3>;
	}

	// Sum all the expenses in the current month
	const sumExpense = filteredExpense.reduce((prev, curr) => prev + curr.amount, 0);

	// Remaining
	const remaining = budget[0].amount-sumExpense;

	return (
		<div className='budget'>
			<h1>Budget</h1>
			<div className='budget__graphic'></div>
			<div className='budget__total'>
				<div className='budget__total--target'>
					{budget.map((eachBudget) => {
						return (
							<span key={eachBudget._id}>
								Budget: {currencyFormatter.format(eachBudget.amount)}
							</span>
						);
					})}
					<button>Edit</button>
				</div>
				<div className='budget__total--remaining'>
					<span>Remaining: {currencyFormatter.format(remaining)}</span>
				</div>
				<div className='budget__total--spent'>
					<span>Spent so far: {currencyFormatter.format(sumExpense)}</span>
				</div>
			</div>

			<CategoryBudget />

		</div>
	);
};

export default Budget;
