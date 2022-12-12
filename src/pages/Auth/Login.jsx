import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginService } from '../../services/auth.services';

function Login() {
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

			localStorage.setItem('authToken', authToken);
		} catch (error) {
			if (error.response.status === 400) {
				setErrorMessage(error.response.data.errorMessage);
			} else {
				navigate('/error');
			}
		}
	};

	return (
		<div className='login'>
			<h1>Login</h1>

			<form onSubmit={handleLogin}>
				<div className='login__email'>
					<label>Email</label>
					<input
						type='email'
						name='email'
						value={email}
						onChange={handleEmailChange}
					/>
				</div>

				<div className='login__password'>
					<label>Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>

				{errorMessage && <p>{errorMessage}</p>}
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}

export default Login;
