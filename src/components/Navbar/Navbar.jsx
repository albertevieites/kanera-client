import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<Link to='/'>KANERA</Link>
			<Link to='/income'>Income</Link>
			<Link to='/expenses'>Expenses</Link>
			<Link to='/budget'>Budget</Link>
			<Link to='/profile'>Profile</Link>
		</div>
	);
};

export default Navbar;
