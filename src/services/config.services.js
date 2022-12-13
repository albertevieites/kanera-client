import axios from 'axios';

const service = axios.create({
	baseURL: 'http://localhost:5005/api',
});

// Intercept requests and add token
service.interceptors.request.use((config)=> {
  // Find token
  const authToken = localStorage.getItem("authToken");

  // Agregate token to the request
  if(authToken) {
    config.headers = {
      authorization: `Bearer ${authToken}`
    }
  }
  return config;
})

export default service;