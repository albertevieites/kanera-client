import React from 'react';

function ReadRowExpense({ eachExpense, handleEditClick }) {
	return (
		<tr>
			<td>{eachExpense.date}</td>
			<td>{eachExpense.description}</td>
			<td>{eachExpense.category}</td>
			<td>{eachExpense.method}</td>
			<td>£{eachExpense.amount}</td>
			<td>
				<button type='button' onClick={(event => handleEditClick(event, eachExpense))}>Edit</button>
			</td>
		</tr>
	);
}

export default ReadRowExpense;
