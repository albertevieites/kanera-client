import service from './config.services';

// GET details from a specific profile
const getProfileService = (id) => {
	return service.get(`/profile/${id}`);
};

// UPDATE details from a specific profile
const updateProfileService = (id, profileObj) => {
	return service.patch(`/profile/${id}`, profileObj);
};

export { getProfileService, updateProfileService };
