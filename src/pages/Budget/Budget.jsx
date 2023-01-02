import { useExpense } from '../../context/ExpenseContext';

import { currencyFormatter } from '../../utils/currency';

import BudgetCard from '../../components/BudgetCard/BudgetCard';

const Budget = () => {
	const { expense } = useExpense();

  // Sum
  const totalExpense = expense.reduce((prev, curr) => prev + curr.amount, 0);
	return (
		<div className='budget'>
			<h1>Budget</h1>
			<div className='budget__graphic'></div>
			<div className='budget__total'>
				<div className='budget__total--target'>
					<span>Budget: £2000</span>
          <button>Edit</button>
				</div>
				<div className='budget__total--remaining'>
					<span>Remaining: £1000</span>
				</div>
				<div className='budget__total--spent'>
					<span>Spent so far: {currencyFormatter.format(totalExpense)}</span>
				</div>
			</div>
			<BudgetCard name='Entertaiment' amount={200} max={1000}></BudgetCard>
		</div>
	);
};

export default Budget;
