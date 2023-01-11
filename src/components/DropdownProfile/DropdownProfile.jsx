import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

function DropDownProfile() {
  const navigate = useNavigate();

  const { user, authenticateUser } = useContext(AuthContext);

  // Logout
  const handleLogout = (event) => {
    event.preventDefault();
    // Destroy token
    localStorage.removeItem('authToken');
    // Authenticate user
    authenticateUser();
    // Redirect
    navigate('/');
  };

  return (
    <div className='dropdown'>
      <ul className='dropdown__list'>
        <Link to={`/profile/${user._id}`}>
          <li>Profile</li>
        </Link>
        <li onClick={handleLogout} className="dropdown__logout">Logout</li>
      </ul>
    </div>
  );
}

export default DropDownProfile;
