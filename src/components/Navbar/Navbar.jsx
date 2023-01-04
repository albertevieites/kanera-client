import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import KaneraLogo from '/kanera-white.svg';

const Navbar = () => {
	// const navigate = useNavigate();

	const { isLoggedIn, user, authenticateUser } = useContext(AuthContext);

	// Logout
	const handleLogout = async (event) => {
		event.preventDefault();
		try {
			// Destroy token
			await localStorage.removeItem('authToken');
			// Authenticate user
			authenticateUser();
			// Redirect
			navigate('/');
		} catch (error) {
			navigate('/error');
		}
	};

	// RENDER
	if (isLoggedIn === true) {
		return (
			<div className='navbar--active'>
				<Link to='/dashboard'>
					<img src={KaneraLogo} alt='kanera logo' />
				</Link>
				<div className='navbar--active__container'>
					<div className='navbar--active__sections'>
						<Link to='/income'>
							<p>Income</p>
						</Link>
						<Link to='/expenses'>
							<p>Expenses</p>
						</Link>
						<Link to='/budget'>
							<p>Budget</p>
						</Link>
					</div>
					<div className="navbar--active__profile">
						<Link to={`/profile/${user._id}`}>
							<img src={user.image} alt="user avatar" />
							<p className='navbar--active__name'>{user.fullname}</p>
						</Link>
							<button onClick={handleLogout}>Logout</button>
					</div>
				</div>
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
