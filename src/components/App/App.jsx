import { Route, Routes } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import Login from '../../pages/Auth/Login';
import Signup from '../../pages/Auth/Signup';
import Budget from '../../pages/Budget/Budget';
import Error from '../../pages/Error/Error';
import Expenses from '../../pages/Expenses/Expenses';
import ExpensesDetails from '../../pages/Expenses/ExpensesDetails';
import ExpensesEdit from '../../pages/Expenses/ExpensesEdit';
import Home from '../../pages/Home/Home';
import Income from '../../pages/Income/Income';
import IncomeEdit from '../../pages/Income/IncomeEdit';
import NotFound from '../../pages/NotFound/NotFound';
import Profile from '../../pages/Profile/Profile';
import Dashboard from '../../pages/Dashboard/Dashboard';
import IsPrivate from '../IsPrivate/IsPrivate';
import IsAnon from '../IsAnon/IsAnon';

function App() {
	return (
		<div className='App'>
			<Navbar />

			<Routes>
				{/* Initial page */}
				<Route path='/' element={<IsAnon><Home/></IsAnon>} />
				<Route path='/signup' element={<IsAnon><Signup/></IsAnon>}/>
				<Route path='/login' element={<IsAnon><Login/></IsAnon>} />

				{/* Logged page */}
				<Route path='/dashboard' element={<IsPrivate><Dashboard/></IsPrivate>} />
				<Route path='/income' element={<IsPrivate><Income /></IsPrivate>} />
				<Route path='/income/edit/:id' element={<IsPrivate><IncomeEdit /></IsPrivate>} />
				<Route path='/expenses' element={<IsPrivate><Expenses /></IsPrivate>} />
				<Route path='/expenses/:id' element={<IsPrivate><ExpensesDetails /></IsPrivate>} />
				<Route path='/expenses/edit/:id' element={<IsPrivate><ExpensesEdit /></IsPrivate>} />
				<Route path='/budget' element={<IsPrivate><Budget /></IsPrivate>} />
				<Route path='/profile' element={<IsPrivate><Profile /></IsPrivate>} />

				{/* Components for error handling */}
				<Route path='/error' element={<Error />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
