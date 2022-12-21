import React, { useState } from 'react';

function ProfileEdit() {
  const num = 0;

  const [avatar, setAvatar] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState(Number(num));
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleAvatarChange = (event) => setAvatar(event.target.value);
  const handleFullnameChange = (event) => setFullname(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleProfessionChange = (event) => setProfession(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleCityChange = (event) => setCity(event.target.value);
  const handleCountryChange = (event) => setCountry(event.target.value);

	return (
		<div className='profile--edit'>
			<h3>Update your profile</h3>

			<div className='profile--edit__container'>
				<div className='profile--edit__avatar'>
					<input
						type='text'
						name='avatar'
						value={avatar}
						onChange={handleAvatarChange}
					/>
				</div>
				<div className='profile--edit__avatar'>
					<input
						type='text'
						name='fullname'
						value={fullname}
						onChange={handleFullnameChange}
					/>
				</div>
				<div className='profile--edit__fullname'>
					<input
						type='text'
						name='fullname'
						value={fullname}
						onChange={handleFullnameChange}
					/>
				</div>
				<div className='profile--edit__email'>
					<input
						type='text'
						name='email'
						value={email}
						onChange={handleEmailChange}
					/>
				</div>
				<div className='profile--edit__profession'>
					<input
						type='text'
						name='profession'
						value={profession}
						onChange={handleProfessionChange}
					/>
				</div>
				<div className='profile--edit__age'>
					<input
						type='number'
						name='age'
						value={age}
						onChange={handleAgeChange}
					/>
				</div>
				<div className='profile--edit__gender'>
					<input
						type='text'
						name='gender'
						value={gender}
						onChange={handleGenderChange}
					/>
				</div>
				<div className='profile--edit__city'>
					<input
						type='text'
						name='city'
						value={city}
						onChange={handleCityChange}
					/>
				</div>
				<div className='profile--edit__country'>
					<input
						type='text'
						name='country'
						value={country}
						onChange={handleCountryChange}
					/>
				</div>
			</div>
		</div>
	);
}

export default ProfileEdit;
