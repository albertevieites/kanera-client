import { useEffect } from 'react';
import { useExpense } from '../../context/ExpenseContext';

import { currencyFormatter } from '../../utils/currency';

function TodayCard() {
	// Context
	const { expense, getExpense } = useExpense();

	useEffect(() => {
		getExpense();
	}, []);

	 // * Filter expense by current day
	const filteredExpense = expense.filter((element) => {
		// Current Date
		const currentDate = new Date().toJSON();
		const slicedCurrentDate = currentDate.slice(0, 10);

		// Date from database
		const slicedElement = element.date.slice(0, 10);

		if (slicedElement === slicedCurrentDate) {
			console.log(element);
			return element;
		}
		return false;
	});

	// GetDate
	const current = new Date();
	const currentDate = current.toJSON();
	console.log(currentDate);
	const day = current.getDate();
	const weekDay = current.toLocaleDateString('default', { weekday: 'long' });
	const month = current.toLocaleDateString('default', { month: 'short' });
	const year = current.getFullYear();

	// Sum
	const sum = filteredExpense.reduce((prev, curr) => prev + curr.amount, 0);

	return (
		<div className='today'>
			<div className='today__title'>
				<h2>Today</h2>
				<div className='today__date'>
					<h1>{day}</h1>
					<div className='today__date--right'>
						<p>{weekDay}</p>
						<span>{month}</span>
						<span> {year}</span>
					</div>
				</div>
			</div>

			<div className='today__expenses'>
				{filteredExpense.map(eachExpense => {
					return (
						<div className='today__details' key={eachExpense._id}>
							<div className='today__concept'>
								<p>{eachExpense.description}</p>
								<p>{eachExpense.method}</p>
								<p>{eachExpense.test}</p>
							</div>
							<div className='today__amount'>
								<p>- {currencyFormatter.format(eachExpense.amount)}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className='today__spent'>
				<h4>You've spent <span>{currencyFormatter.format(sum)}</span> today</h4>
			</div>
		</div>
	);
}

export default TodayCard;
