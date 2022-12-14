import axios from 'axios';

const service = axios.create({
	baseURL: import.meta.env.VITE_SERVER_URL,
});

// Intercept requests and add token
service.interceptors.request.use((config) => {
	// Find token
	const authToken = localStorage.getItem('authToken');

	// Agregate token to the request
	if (authToken) {
		config.headers = {
			authorization: `Bearer ${authToken}`,
		};
	}
	return config;
});

export default service;
