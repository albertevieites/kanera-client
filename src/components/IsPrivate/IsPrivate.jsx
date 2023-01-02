import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

function IsPrivate(props) {
	const { isLoggedIn } = useContext(AuthContext);

	if (isLoggedIn) {
		// If the user is not logged in
		return props.children;
	} else {
		// If the user is logged in, allow to see the page
		return <Navigate to='/' />;
	}
}

export default IsPrivate;
