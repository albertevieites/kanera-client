import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function IncomeEdit() {
  const {id} = useParams();
  const navigate = useNavigate();

	const todayDate = new Date().toISOString().slice(0, 10);
	const num = 0;

	const [date, setDate] = useState(todayDate);
	const [type, setType] = useState('');
	const [amount, setAmount] = useState(Number(num));

	const handleDateChange = (event) => setDate(event.target.value);
	const handleTypeChange = (event) => setType(event.target.value);
	const handleAmountChange = (event) => setAmount(event.target.value);
  return (
    <div>IncomeEdit</div>
  )
}

export default IncomeEdit