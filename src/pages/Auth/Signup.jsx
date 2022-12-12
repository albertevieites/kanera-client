import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signupService } from '../../services/auth.services';

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
      if(error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error")
      }
		}
	};

	return (
		<div className='signup'>
			<h1>Signup</h1>

			<form onSubmit={handleSignup}>
				<div className='signup__fullname'>
					<label>Fullname</label>
					<input
						type='text'
						name='fullname'
						value={fullname}
						onChange={handleFullnameChange}
					/>
				</div>

				<div className='signup__email'>
					<label>Email</label>
					<input
						type='email'
						name='email'
						value={email}
						onChange={handleEmailChange}
					/>
				</div>

				<div className='signup__password'>
					<label>Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>

        {errorMessage && <p>{errorMessage}</p>}

				<button type='submit'>Signup</button>
			</form>
		</div>
	);
}

export default Signup;
