import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExpenseForm = (props) => {
	const navigate = useNavigate();

	const [name, setName] = useState(" ");
	const [amount, setAmount] = useState(0);

	const handleNameChange = event => setName(event.target.value)
	const handleAmountChange = event => setAmount(event.target.value)


	const handleSubmit = async () => {
		const newExpense = {
			name: name,
			amount: amount,
		}

		try {
			await axios.post("http://localhost:5005/api/expenses", newExpense)
			props.getExpenses();
		} catch (error) {
			// ...
			navigate("/error");
		}
	};

	return (
		<div className='expense--form'>
			<h3>Add your expense</h3>

			<form onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					type='text'
					name='name'
					value={name}
					onChange={handleNameChange}
				/>

				<label>Amount</label>
				<input
					type='number'
					name='amount'
					value={amount}
					onChange={handleAmountChange}
				/>

				<button type='submit'>Fill it out!</button>
			</form>
		</div>
	);
};

export default ExpenseForm;
