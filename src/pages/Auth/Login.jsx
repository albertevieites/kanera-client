import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { loginService } from '../../services/auth.services';

import KaneraLogo from '/kanera.svg';

function Login() {
	const { authenticateUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleEmailChange = (e) => setEmail(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);

	const handleLogin = async (e) => {
		e.preventDefault();

		const user = {
			email: email,
			password: password,
		};

		try {
			const response = await loginService(user);
			console.log(response.data);

			const authToken = response.data.authToken;
			console.log(authToken);

			// Save token in localStorage
			localStorage.setItem('authToken', authToken);

			// Invoke function from context to contact with verifyService
			authenticateUser();

			navigate('/dashboard');

			// ! Here redirect to some private page
		} catch (error) {
			console.log(error.response.status);
			console.log(error.response.data.errorMessage);
			if (error.response.status === 400) {
				setErrorMessage(error.response.data.errorMessage);
			} else {
				navigate('/error');
			}
		}
	};

	return (
		<div className='login'>
			<div className='login__fields'>
				<Link to='/'>
					<img src={KaneraLogo} alt='kanera logo' />
				</Link>

				<form onSubmit={handleLogin}>
					<h3>Hi, Welcome back!</h3>
					<div className='login__email'>
						<label>Email</label>
						<input
							type='email'
							name='email'
							placeholder='faemino@kanera.com'
							value={email}
							onChange={handleEmailChange}
						/>
					</div>
					<div className='login__password'>
						<label>Password</label>
						<input
							type='password'
							name='password'
							placeholder='**************'
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>
					{errorMessage && <p className='login__error'>{errorMessage}</p>}
					<button type='submit'>Login</button>
				</form>
			</div>

			<div className='login__graphic'></div>
		</div>
	);
}

export default Login;
