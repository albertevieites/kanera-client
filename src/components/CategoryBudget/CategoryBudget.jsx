import { useEffect } from 'react';

import { useExpense } from '../../context/ExpenseContext';

function CategoryBudget() {
	const { expense, getExpense } = useExpense();

	useEffect(() => {
		getExpense();
	}, []);

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

	// * Filter expense by category
	const filteredCategory = filteredExpense.filter((element) => {
		if (element.category) {
			return element;
		}
		return false;
	});

	// Sum all the expenses in the current month
	const sumExpense = filteredCategory.reduce(
		(prev, curr) => prev + curr.amount,
		0
	);

	return (
		<div className='category--budget'>
			<div className='category--budget--groceries'>
				Groceries Spent: {sumExpense}
			</div>
		</div>
	);
}

export default CategoryBudget;
