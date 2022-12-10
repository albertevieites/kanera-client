import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getExpenseDetailsService, updateExpenseService } from '../../services/expenses.services';

const ExpensesEdit = () => {
	// id
	const { id } = useParams();

	// useNavigate for handling redirection
	const navigate = useNavigate();

	// variables
	const todayDate = new Date().toISOString().slice(0, 10);
	const num = 0;

	// useState for input fields
	const [date, setDate] = useState(todayDate);
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [method, setMethod] = useState('');
	const [amount, setAmount] = useState(Number(num));

	// Handle change events
	const handleDateChange = (event) => setDate(event.target.value);
	const handleDescriptionChange = (event) => setDescription(event.target.value);
	const handleCategoryChange = (event) => setCategory(event.target.value);
	const handleMethodChange = (event) => setMethod(event.target.value);
	const handleAmountChange = (event) => setAmount(event.target.value);

	useEffect(() => {
		getExpensesDetails();
	}, []);

	const getExpensesDetails = async () => {
		try {
			const response = await getExpenseDetailsService(id);
			console.log(response.data);
			setDate(response.data.date);
			setDescription(response.data.description);
			setCategory(response.data.category);
			setMethod(response.data.method);
			setAmount(response.data.amount);
		} catch (error) {
			navigate('/error');
		}
	};

	const handleEdit = async ()=> {
		const expenseObj = {
			date,
			description,
			category,
			method,
			amount
		}

		try {
			await updateExpenseService(id, expenseObj);
			navigate('/expenses');
		} catch (error) {
			navigate("/error")
		}
	}


	return (
		<div className='expenses--edit'>
			<h3>Update your expense</h3>

			<div className='expenses--edit__container'>
				{/* <form> */}
				{/* Date field */}
				<div className='expenses--edit__date'>
					<label>Date</label>
					<input
						type='date'
						name='date'
						value={date}
						onChange={handleDateChange}
					/>
				</div>
				{/* Desription field */}
				<div className='expenses--edit__description'>
					<label>Description</label>
					<input
						type='text'
						name='description'
						value={description}
						onChange={handleDescriptionChange}
					/>
				</div>
				{/* Category field */}
				<div className='expenses--edit__category'>
					<label>Category</label>
					<select
						name='category'
						value={category}
						onChange={handleCategoryChange}
					>
						<option value='Bills'>Bills</option>
						<option value='Charity'>Charity</option>
						<option value='Concerts'>Concerts</option>
						<option value='Shopping'>Shopping</option>
						<option value='Eating Out'>Eating Out</option>
						<option value='Entertainment'>Entertainment</option>
						<option value='Finances'>Finances</option>
						<option value='General'>General</option>
						<option value='Gifts'>Gifts</option>
						<option value='Groceries'>Groceries</option>
						<option value='Gym'>Gym</option>
						<option value='Healthcare'>Healthcare</option>
						<option value='Holidays'>Holidays</option>
						<option value='Housing'>Housing</option>
						<option value='Transportation'>Transportation</option>
					</select>
				</div>
				{/* Method field */}
				<div className='expenses--edit__method'>
					<label>Method</label>
					<select name='method' value={method} onChange={handleMethodChange}>
						<option value='Card'>Card</option>
						<option value='Cash'>Cash</option>
						<option value='Direct Debit'>Direct Debit</option>
					</select>
				</div>
				{/* Amount field */}
				<div className='expenses--edit__amount'>
					<label>Amount</label>
					<input
						type='number'
						name='amount'
						value={amount}
						onChange={handleAmountChange}
					/>
				</div>
			</div>
			{/* Button to submit data */}
			<button onClick={handleEdit}>Update</button>
		</div>
	);
};

export default ExpensesEdit;
