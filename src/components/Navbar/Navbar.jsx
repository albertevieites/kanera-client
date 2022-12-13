import { useContext, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/auth.context';

const Navbar = () => {
	const navigate = useNavigate();

	const { isUserActive, user, authenticateUser } = useContext(AuthContext);

	const handleLogout = () => {
		// Destroy token
		localStorage.removeItem("authToken");
		// Authenticate user
		authenticateUser();
		// Redirect
		navigate("/");
	}

	if (isUserActive === true) {
		return (
			<div className='navbar--active'>
				<Link to='/'>KANERA</Link>
				<Link to='/income'>Income</Link>
				<Link to='/expenses'>Expenses</Link>
				<Link to='/budget'>Budget</Link>
				<Link to='/profile'>Profile</Link>
				<button onClick={handleLogout}>Logout</button>
				<p className='navbar--active__email'>{user.email}</p>
			</div>
		);
	} else {
		return (
			<div className='navbar'>
				<Link to='/signup'>Signup</Link>
				<Link to='/login'>Login</Link>
			</div>
		);
	}
};

export default Navbar;
