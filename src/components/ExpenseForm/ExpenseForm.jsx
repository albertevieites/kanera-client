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
	const [category, setCategory] = useState('');
	const [method, setMethod] = useState('');
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
			await addExpensesService(newExpense)
			// navigate("/expenses")
			props.getExpenses();
		} catch (err) {
			navigate('/error');
		}
	};

	return (
		<div className='expense--form'>
			<h3>Add your expense</h3>

				{/* <form> */}
				{/* Date field */}
				<label>Date</label>
				<input
					type='date'
					name='date'
					value={date}
					onChange={handleDateChange}
				/>

				{/* Desription field */}
				<label>Description</label>
				<input
					type='text'
					name='description'
					value={description}
					onChange={handleDescriptionChange}
				/>

				{/* Category field */}
				<label>Category</label>
				<select
					name='category'
					value={category}
					onChange={handleCategoryChange}
				>
					<option value='bills'>Bills</option>
					<option value='groceries'>Groceries</option>
				</select>

				{/* Method field */}
				<label>Method</label>
				<select name='method' value={method} onChange={handleMethodChange}>
					<option value='cash'>Cash</option>
					<option value='card'>Card</option>
				</select>

				{/* Amount field */}
				<label>Amount</label>
				<input
					type='number'
					name='amount'
					value={amount}
					onChange={handleAmountChange}
				/>

				{/* Button to submit data */}
				<button onClick={handleSubmit}>Fill it out!</button>
				{/* </form> */}

		</div>
	);
};

export default ExpenseForm;
