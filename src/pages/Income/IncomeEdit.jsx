import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
	getIncomeDetailsService,
	updateIncomeService,
} from '../../services/income.services';

function IncomeEdit() {
	const { id } = useParams();
	const navigate = useNavigate();

	const todayDate = new Date().toISOString().slice(0, 10);
	const num = 0;

	const [date, setDate] = useState(todayDate);
	const [type, setType] = useState('');
	const [amount, setAmount] = useState(Number(num));

	const handleDateChange = (event) => setDate(event.target.value);
	const handleTypeChange = (event) => setType(event.target.value);
	const handleAmountChange = (event) => setAmount(event.target.value);

	useEffect(() => {
		getIncomeDetails();
	}, []);

	const getIncomeDetails = async () => {
		try {
			const response = await getIncomeDetailsService(id);
			console.log(response.data);
			setDate(response.data.date);
			setType(response.data.type);
			setAmount(response.data.amount);
		} catch (error) {
			navigate('/error');
		}
	};

	const handleEdit = async () => {
		const incomeObj = {
			date,
			type,
			amount,
		};

		try {
			await updateIncomeService(id, incomeObj);
			navigate('/income');
		} catch (error) {
			navigate('/error');
		}
	};
	return (
		<div className='income--edit'>
			<h3>Update your income</h3>

			<div className='income--edit__container'>
				<div className='income--edit__date'>
					<label>Date</label>
					<input
						type='date'
						name='date'
						value={date}
						onChange={handleDateChange}
					/>
				</div>

				<div className='income--edit__type'>
					<label>Income Type</label>
					<input
						type='text'
						name='type'
						value={type}
						onChange={handleTypeChange}
					/>
				</div>

				<div className='income--edit__amount'>
					<label>Amount</label>
					<input
						type='number'
						name='amount'
						value={amount}
						onChange={handleAmountChange}
					/>
				</div>
			</div>
			<button onClick={handleEdit}>Update</button>
		</div>
	);
}

export default IncomeEdit;
