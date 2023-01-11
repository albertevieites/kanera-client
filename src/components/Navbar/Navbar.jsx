import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import DropDownProfile from '../DropdownProfile/DropdownProfile';

import DotsIcon from '/icons/dots-vertical.svg';
import KaneraLogo from '/kanera-white.svg';

const Navbar = () => {
	const [openProfile, setOpenProfile] = useState(false);

	const { isLoggedIn, user } = useContext(AuthContext);

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
					<div className='navbar--active__profile'>
						<Link to={`/profile/${user._id}`}>
							<img src={user.image} alt='user avatar' className='navbar--active__avatar' />
							<p className='navbar--active__name'>{user.fullname}</p>
						</Link>
						<img src={DotsIcon} alt='dots icon' className='navbar--active__dots' onClick={()=> setOpenProfile((prev) => !prev)}></img>
						{
							openProfile && <DropDownProfile />
						}
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
