import { currencyFormatter } from '../../utils/currency';

function BudgetCard({ name, amount, max }) {
	return (
		<div className='budget--card'>
			<h2>{name}</h2>
			<h2>
				{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}
			</h2>
		</div>
	);
}

export default BudgetCard;
