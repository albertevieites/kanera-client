import { createContext, useEffect, useState } from 'react';

import { verifyService } from '../services/auth.services';

const AuthContext = createContext();

function AuthWrapper(props) {
	// All states that determine whether the user is active
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState(null);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		authenticateUser();
	}, []);

	const authenticateUser = async () => {
		// It's a function that verify if the user token is valid
		try {
			const response = await verifyService();
			// From here, the user is authenticated
			console.log(response.data);
			setIsLoggedIn(true);
			setUser(response.data);
			setIsFetching(false);
		} catch (error) {
			// If it is catch, the user is not authenticated
			console.log(error);
			setIsLoggedIn(false);
			setUser(null);
			setIsFetching(false);
		}
	};

	const passedContext = {
		isLoggedIn,
		user,
		authenticateUser,
		setIsLoggedIn,
		setUser,
	};

	if (isFetching === true) {
		return <h3>... Is Validating User</h3>;
	}

	return (
		<AuthContext.Provider value={passedContext}>
			{props.children}
		</AuthContext.Provider>
	);
}

export { AuthContext, AuthWrapper };
