import { useEffect } from 'react';
import { useState } from 'react';

function TodayCard() {
	// Hooks
	const { allExpenses, setAllExpenses } = useState([]);

  useEffect(()=> {

  }, [])

  // Axios
  const getExpenses = async () => {
    try {
      
    } catch (error) {
      // ... redirection
    }
  }

	// GetDate
	const current = new Date();
	const date = `${current.getDate()}/${
		current.getMonth() + 1
	}/${current.getFullYear()}`;

	return (
		<div className='todaycard'>
			<div className='today__title'>
				<h2>Today</h2>
				<h3>{date}</h3>
			</div>

			<div className='today__expenses'>
				<h3>List of today's expenses</h3>
			</div>
		</div>
	);
}

export default TodayCard;
