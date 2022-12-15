import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signupService } from '../../services/auth.services';

import KaneraLogo from '/kanera.svg';

function Signup() {
	const navigate = useNavigate();

	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleFullnameChange = (e) => setFullname(e.target.value);
	const handleEmailChange = (e) => setEmail(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);

	const handleSignup = async (e) => {
		e.preventDefault();

		const newUser = {
			fullname: fullname,
			email: email,
			password: password,
		};

		try {
			await signupService(newUser);
			navigate('/login');
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
		<div className='signup'>
			<div className='signup__fields'>
				<Link to='/'>
					<img src={KaneraLogo} alt='kanera logo' />
				</Link>

				<form onSubmit={handleSignup}>
					<h3>Get Started</h3>
					<div className='signup__fullname'>
						<label>Fullname</label>
						<input
							type='text'
							name='fullname'
							placeholder='Faemino y Cansado'
							value={fullname}
							onChange={handleFullnameChange}
						/>
					</div>

					<div className='signup__email'>
						<label>Email</label>
						<input
							type='email'
							name='email'
							placeholder='faemino@kanera.com'
							value={email}
							onChange={handleEmailChange}
						/>
					</div>

					<div className='signup__password'>
						<label>Password</label>
						<input
							type='password'
							name='password'
							placeholder='**************'
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>

					{errorMessage && <p className='signup__error'>{errorMessage}</p>}

					<button type='submit'>Create Account</button>
				</form>
			</div>

			<div className='signup__graphic'></div>
		</div>
	);
}

export default Signup;
