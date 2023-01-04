import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Services
import { addExpensesService } from '../../services/expenses.services';

const ExpenseForm = (props) => {
	// useNavigate for handling redirection
	const navigate = useNavigate();

	// variables
	const todayDate = new Date().toISOString().slice(0, 10);
	const num = 0;

	// useState for input fields
	const [date, setDate] = useState(todayDate);
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('General');
	const [method, setMethod] = useState('Card');
	const [amount, setAmount] = useState(Number(num));

	// Handle change events
	const handleDateChange = (event) => setDate(event.target.value);
	const handleDescriptionChange = (event) => setDescription(event.target.value);
	const handleCategoryChange = (event) => setCategory(event.target.value);
	const handleMethodChange = (event) => setMethod(event.target.value);
	const handleAmountChange = (event) => setAmount(event.target.value);

	// Submit function 🚀 - Handle data submission
	const handleSubmit = async () => {
		// This function could be form onSubmit or onClick button
		// New object
		const newExpense = {
			date: date,
			description: description,
			category: category,
			method: method,
			amount: amount,
		};

		// Submit form to database
		try {
			await addExpensesService(newExpense);
			// navigate("/expenses")
			props.getExpenses();

			// Reset input fields
			setDate(todayDate);
			setDescription('');
			setCategory('');
			setMethod('');
			setAmount(Number(num));
		} catch (err) {
			navigate('/error');
		}
	};

	return (
		<div className='expense--form'>
			<h3>Add your expense</h3>

			<div className='expense--form__container'>
				{/* <form> */}
				{/* Date field */}
				<div className='expense--form__date'>
					<label>Date</label>
					<input
						type='date'
						name='date'
						value={date}
						onChange={handleDateChange}
					/>
				</div>
				{/* Desription field */}
				<div className='expense--form__description'>
					<label>Description</label>
					<input
						type='text'
						name='description'
						value={description}
						onChange={handleDescriptionChange}
					/>
				</div>
				{/* Category field */}
				<div className='expense--form__category'>
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
				<div className='expense--form__method'>
					<label>Method</label>
					<select name='method' value={method} onChange={handleMethodChange}>
						<option value='Card'>Card</option>
						<option value='Cash'>Cash</option>
						<option value='Direct Debit'>Direct Debit</option>
					</select>
				</div>
				{/* Amount field */}
				<div className='expense--form__amount'>
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
			<button onClick={handleSubmit}>Fill it out!</button>
			{/* </form> */}
		</div>
	);
};

export default ExpenseForm;
