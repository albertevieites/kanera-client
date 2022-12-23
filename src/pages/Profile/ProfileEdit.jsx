import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
	getProfileService,
	updateProfileService,
} from '../../services/profile.services';

import arrCountry from '../../utils/country';
import arrGender from '../../utils/gender';

function ProfileEdit() {
	const { id } = useParams();
	const navigate = useNavigate();

	const num = 0;

	// const [userPhotoUrl, setUserPhotoUrl] = useState('');
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [profession, setProfession] = useState('');
	const [age, setAge] = useState(Number(num));
	const [gender, setGender] = useState('');
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');

	const handlePhotoChange = (event) => setAvatar(event.target.files[0]);
	const handleFullnameChange = (event) => setFullname(event.target.value);
	const handleEmailChange = (event) => setEmail(event.target.value);
	const handleProfessionChange = (event) => setProfession(event.target.value);
	const handleAgeChange = (event) => setAge(event.target.value);
	const handleGenderChange = (event) => setGender(event.target.value);
	const handleCityChange = (event) => setCity(event.target.value);
	const handleCountryChange = (event) => setCountry(event.target.value);

	useEffect(() => {
		getProfileDetails();
	}, []);

	const getProfileDetails = async () => {
		try {
			const response = await getProfileService(id);
			console.log(response.data);
			// setUserPhotoUrl(response.data.userPhotoUrl);
			setFullname(response.data.fullname);
			setEmail(response.data.email);
			setProfession(response.data.profession);
			setAge(response.data.age);
			setGender(response.data.gender);
			setCity(response.data.city);
			setCountry(response.data.country);
		} catch (error) {
			navigate('/error');
		}
	};

	const handleEdit = async () => {
		const profileObj = {
			// userPhotoUrl,
			fullname,
			email,
			profession,
			age,
			gender,
			city,
			country,
		};

		try {
			await updateProfileService(id, profileObj);
			navigate(`/profile/${id}`);
		} catch (error) {
			navigate('/error');
		}
	};

	return (
		<div className='profile--edit'>
			<h3>Update your profile</h3>

			<div className='profile--edit__container'>
				{/* <div className='profile--edit__avatar'>
					<label>Upload your photo profile</label>
					<input
						type='file'
						name='userPhotoUrl'
						value={userPhotoUrl}
						onChange={handlePhotoChange}
					/>
				</div> */}
				<div className='profile--edit__fullname'>
					<label>Full Name</label>
					<input
						type='text'
						name='fullname'
						value={fullname}
						onChange={handleFullnameChange}
					/>
				</div>
				<div className='profile--edit__email'>
					<label>Email</label>
					<input
						type='text'
						name='email'
						value={email}
						onChange={handleEmailChange}
					/>
				</div>
				<div className='profile--edit__profession'>
					<label>Profession</label>
					<input
						type='text'
						name='profession'
						value={profession}
						onChange={handleProfessionChange}
					/>
				</div>
				<div className='profile--edit__age'>
					<label>Age</label>
					<input
						type='number'
						name='age'
						value={age}
						onChange={handleAgeChange}
					/>
				</div>
				<div className='profile--edit__gender'>
					<label>Gender</label>
					<select
						type='text'
						name='gender'
						value={gender}
						onChange={handleGenderChange}
					>
						{arrGender.map(({ gender }) => (
							<option value={gender} key={gender}>
								{gender}
							</option>
						))}
					</select>
				</div>
				<div className='profile--edit__city'>
					<label>City</label>
					<input
						type='text'
						name='city'
						value={city}
						onChange={handleCityChange}
					/>
				</div>
				<div className='profile--edit__country'>
					<label>Country</label>
					<select name='country' value={country} onChange={handleCountryChange}>
						{arrCountry.map(({ country }) => (
							<option value={country} key={country}>
								{country}
							</option>
						))}
					</select>
				</div>
			</div>
			<button onClick={handleEdit}>Update</button>
		</div>
	);
}

export default ProfileEdit;
