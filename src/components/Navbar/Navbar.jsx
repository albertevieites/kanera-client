import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/auth.context';

import BudgetIcon from '/icons/budget.svg';
import ExpensesIcon from '/icons/expenses.svg';
import IncomeIcon from '/icons/income.svg';
import KaneraLogo from '/kanera-white.svg';

const Navbar = () => {
	const navigate = useNavigate();

	const { isLoggedIn, user, authenticateUser } = useContext(AuthContext);

	const handleLogout = () => {
		// Destroy token
		localStorage.removeItem('authToken');
		// Authenticate user
		authenticateUser();
		// Redirect
		navigate('/');
	};

	if (isLoggedIn === true) {
		return (
			<div className='navbar--active'>
				<Link to='/dashboard'>
					<img src={KaneraLogo} alt='kanera logo' />
				</Link>
				<Link to='/income'>
					<img src={IncomeIcon} alt='Income icon' />
					<p>Income</p>
				</Link>
				<Link to='/expenses'>
					<img src={ExpensesIcon} alt='Expenses Icon' />
					<p>Expenses</p>
				</Link>
				<Link to='/budget'>
					<img src={BudgetIcon} alt='Budget Icon' />
					<p>Budget</p>
				</Link>
				<Link to='/profile'>Profile</Link>
				<button onClick={handleLogout}>Logout</button>
				<p className='navbar--active__email'>{user.email}</p>
			</div>
		);
	} else {
		return (
			<div className='navbar'>
				<Link to='/signup' className='navbar__signup'>
					Try it for free
				</Link>
				<Link to='/login' className='navbar__login'>
					Login
				</Link>
			</div>
		);
	}
};

export default Navbar;
