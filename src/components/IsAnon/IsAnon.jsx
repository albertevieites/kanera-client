import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../context/auth.context';

function IsAnon(props) {
	const { isLoggedIn } = useContext(AuthContext);

	if (isLoggedIn) {
		// If the user is logged in, navigate to home page
		return <Navigate to='/dashboard' />;
	} else {
		return props.children;
	}
}

export default IsAnon;
