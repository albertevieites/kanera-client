import React from 'react';

function EditableRowExpense() {
	return (
		<tr>
			<td>
				<input type='date' name='date' />
			</td>
			<td>
				<input type='text' name='description' />
			</td>
			<td>
				<select name='category'>
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
			</td>
			<td>
				<select name='mehtod'>
					<option value='Card'>Card</option>
					<option value='Card'>Cash</option>
					<option value='Card'>Direct Debit</option>
				</select>
			</td>
			<td>
				<input type='number' name='amount' />
			</td>
		</tr>
	);
}

export default EditableRowExpense;
