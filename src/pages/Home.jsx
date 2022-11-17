import { useState } from 'react';

import TodayCard from '../components/TodayCard';

const Home = () => {
  const [dataTable, setDataTable] = useState([])

  const column = [
    { heading: "Date" },
    { heading: "Expense" },
    { heading: "Category" },
    { heading: "Amount" },
  ]

  return (
    <div className='home'>
      <h1>DASHBOARD</h1>

      <TodayCard data={dataTable} column={column}/>
    </div>
  );
}

export default Home;
