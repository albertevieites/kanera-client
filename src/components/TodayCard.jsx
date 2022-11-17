import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TodayCard({ data, column }) {
	// Hooks
	const navigate = useNavigate();

	const [allExpenses, setAllExpenses] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		getExpenses();
	}, []);

	// Axios
	const getExpenses = async () => {
		try {
			const response = await axios.get('http://localhost:5005/api/expenses');
			console.log(response.data);
			setAllExpenses(response.data);
			setIsFetching(false);
		} catch (error) {
			// ... redirection
			navigate('/error');
		}
	};

	// Fetching
	if (isFetching === true) {
		return <h3>... is Loading</h3>;
	}

	// GetDate
	const current = new Date();
	const day = current.getDate();
	const weekDay = current.toLocaleDateString('default', { weekday: 'long' });
	const month = current.toLocaleDateString('default', { month: 'short' });
	const year = current.getFullYear();

	// Sum
	const sum = allExpenses.reduce((prev, curr, index, array) => prev + curr.amount, 0)

	return (
		<div className='today'>
			<div className='today__title'>
				<h2>Today</h2>
				<div className='today__date'>
					<h1>{day}</h1>
					<div className='today__date--right'>
						<p>{weekDay}</p>
						<span>{month}</span>
						<span>{year}</span>
					</div>
				</div>
			</div>

			<div className='today__expenses'>
				{allExpenses.map(eachExpense => {
					return (
						<div className='today__details' key={eachExpense._id}>
							<div className='today__concept'>
								<p>{eachExpense.name}</p>
								<p>{eachExpense.method}</p>
							</div>
							<div className='today__amount'>
								<p>- £{eachExpense.amount}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className='today__spent'>
				<h4>You've spent <span>£{sum}</span> today</h4>
			</div>
		</div>
	);
}

export default TodayCard;
