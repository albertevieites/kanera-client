import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExpenseForm = props => {
	// variables
	const navigate = useNavigate();
	const num = 0;
	// Format date variable
	const todayDate = new Date().toISOString().slice(0, 10);;

	// useState for input fields
	const [form, setForm] = useState({
		date: todayDate,
		name: '',
		amount: Number(num),
	});

	// Submit function 🚀 - Handle form submission
	/* const handleSubmit = async () => {
		const newExpense = {
			date: date,
			name: name,
			amount: amount,
		};

		try {
			await axios.post('http://localhost:5005/api/expenses', newExpense);
			props.getExpenses();
		} catch (error) {
			// ...
			navigate('/error');
		}
	}; */

	// Handle change events from input fields
	const onChange = e => {
		const { value, name } = e.target;

		setForm(state => ({
			...state,
			[name]: value,
		}));
	};

	// Show data on the console
	const showData = () => {
		console.log('Form: ', form);
	};

	// Prevent refreshing page
	const onSubmit = e => {
		e.preventDefault();

		showData();
	};

	// HTML render
	return (
		<div className='expense--form'>
			<h3>Add your expense</h3>

			<form onSubmit={onSubmit}>
				{/* Date field */}
				<label>Date</label>
				<input type='date' name='date' value={form.date} onChange={onChange} />

				{/* Name field */}
				<label>Name</label>
				<input type='text' name='name' value={form.name} onChange={onChange} />

				{/* Amount field */}
				<label>Amount</label>
				<input
					type='number'
					name='amount'
					value={form.amount}
					onChange={onChange}
				/>

				{/* Button to submit data */}
				<button>Fill it out!</button>
			</form>
		</div>
	);
};

export default ExpenseForm;
