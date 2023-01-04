import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useExpense } from '../../context/ExpenseContext';

import arrCategory from '../../utils/category';

function CategoryBudget() {
	const navigate = useNavigate();

	const { expense, getExpense } = useExpense();

	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		getExpense();
	}, []);

	// * Filter expense by current month
	const filteredExpense = expense.filter((element) => {
		// Current Date
		const currentDate = new Date().toJSON();
		const slicedCurrentDate = currentDate.slice(0, 7);

		// Date from database
		const slicedElement = element.date.slice(0, 7);

		if (slicedElement === slicedCurrentDate) {
      //console.log(element)
			return element;
		}
		return false;
	});

	//console.log(filteredExpense);

  const filteredCategory = filteredExpense.filter((element)=> {
    // Category data
    const categoryElement = element.category;
    console.log(categoryElement);
    const categories = arrCategory;
    console.log(categories);

    if(categoryElement === categories){
      console.log(element);
      return element;
    }
    return false;
  })

	// Sum all the expenses in the current month
	/* const sumExpense = filteredExpense.reduce(
		(prev, curr) => prev + curr.amount,
		0
	); */

	return (
		<div className='category--budget'>
			{/* <div>{sumExpense}</div> */}
			{filteredExpense.map((expense) => {
				return (
					<div>
						<div key={expense.id}>
							{expense.category} :: {expense.amount}
						</div>
					</div>
				);
			})}

		</div>
	);
}

export default CategoryBudget;
