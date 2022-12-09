import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { addIncomeService } from '../../services/income.services';

function IncomeForm(props) {
	const navigate = useNavigate();

	const todayDate = new Date().toISOString().slice(0, 10);
	const num = 0;

	const [date, setDate] = useState(todayDate);
	const [type, setType] = useState('');
	const [amount, setAmount] = useState(Number(num));

	const handleDateChange = (event) => setDate(event.target.value);
	const handleTypeChange = (event) => setType(event.target.value);
	const handleAmountChange = (event) => setAmount(event.target.value);

	const handleSubmit = async () => {
		const newIncome = {
			date,
			type,
			amount,
		};
		try {
			await addIncomeService(newIncome);
			props.getIncome();
			setDate(todayDate);
			setType('');
			setAmount(Number(num));
		} catch (error) {
			navigate('/error');
		}
	};

	return (
		<div className='income--form'>
			<h3>IncomeForm</h3>

			<div className='income--form__container'>
				<div className='income--form__list'>
					<div className='income--form__date'>
						<label>Date</label>
						<input
							type='date'
							name='date'
							value={date}
							onChange={handleDateChange}
						/>
					</div>

					<div className='income--form__type'>
						<label>Income Type</label>
						<input
							type='text'
							name='type'
							value={type}
							onChange={handleTypeChange}
						/>
					</div>

					<div className='income--form__amount'>
						<label>Amount</label>
						<input
							type='number'
							name='amount'
							value={amount}
							onChange={handleAmountChange}
						/>
					</div>
				</div>
			</div>

			<button onClick={handleSubmit}>Fill it out!</button>
		</div>
	);
}

export default IncomeForm;
