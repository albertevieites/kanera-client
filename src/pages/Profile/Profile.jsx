import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getProfileService } from '../../services/profile.services';

const Profile = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [singleProfile, setSingleProfile] = useState(null);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		getSingleProfile();
	}, []);

	const getSingleProfile = async () => {
		try {
			const response = await getProfileService(id);
			console.log(response.data);
			setSingleProfile(response.data);
			setIsFetching(false);
		} catch (error) {
			navigate('/error');
		}
	};

	if (isFetching === true) {
		return <h3>... is Loading</h3>;
	}

	const {
		fullname,
		email,
		profession,
		age,
		gender,
		city,
		country,
		userPhotoUrl,
		_id
	} = singleProfile;

	return (
		<div className='profile'>
			<h1>Profile</h1>

			<div className='profile__container'>
				<div className='profile__user'>
					<img src={userPhotoUrl} alt='photo user' />
					<h2>{fullname}</h2>
					<p>{email}</p>
					<Link to={`/profile/edit/${_id}`}>
						<button>Edit</button>
					</Link>
				</div>

				<div className='profile__data'>
					<div className='profile__data--profession'>
						<p>Profession</p>
						<p>{profession}</p>
					</div>
					<div className='profile__data--age'>
						<p>Age</p>
						<p>{age}</p>
					</div>
					<div className='profile__data--gender'>
						<p>Gender</p>
						<p>{gender}</p>
					</div>
					<div className='profile__data--city'>
						<p>City</p>
						<p>{city}</p>
					</div>
					<div className='profile__data--country'>
						<p>Country</p>
						<p>{country}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
