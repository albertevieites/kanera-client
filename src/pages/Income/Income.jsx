import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import moment from 'moment';

import { getIncomeService, deleteIncomeService } from '../../services/income.services';

import { currencyFormatter } from '../../utils/currency';

import IncomeForm from '../../components/IncomeForm/IncomeForm';

const Income = () => {
	const navigate = useNavigate();

	const [allIncome, setAllIncome] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		getIncome();
	}, []);

	const getIncome = async () => {
		try {
			const response = await getIncomeService();
			console.log(response.data);
			setAllIncome(response.data);
			setIsFetching(false);
		} catch (error) {
			navigate('/error');
		}
	};

	// Delete single income
	const handleDelete = async (id) => {
		try {
			await deleteIncomeService(id);
			getIncome();
		} catch (error) {
			navigate('/error');
		}
	};

	if (isFetching === true) {
		return <h3>... is Loading</h3>;
	}

	// Sum
	const sum = allIncome.reduce((prev, curr) => prev + curr.amount, 0);

	return (
		<div className='income'>
			<h1>Income</h1>

			<IncomeForm getIncome={getIncome} />

			<div className='income__container'>
				<div className='income__list'>
					<table>
						<thead>
							<tr>
								<th>Date</th>
								<th>Income Type</th>
								<th>Amount</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>
							{allIncome.map((eachIncome) => {
								return (
									<tr key={eachIncome._id}>
										<td>{moment(eachIncome.date).format("DD-MM-yyyy")}</td>
										<td>{eachIncome.type}</td>
										<td>{currencyFormatter.format(eachIncome.amount)}</td>
										<td>
											<button onClick={() => handleDelete(eachIncome._id)}>Delete</button>
											<Link to={`/income/edit/${eachIncome._id}`}>
												<button>Edit</button>
											</Link>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<div className='income__total'>
					<h1>{currencyFormatter.format(sum)}</h1>
				</div>
			</div>
		</div>
	);
};

export default Income;
