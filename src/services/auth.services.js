import axios from 'axios';

const service = axios.create({
	baseURL: 'http://localhost:5005/api',
});

// POST Signup
const signupService = (newUser) => {
  return service.post("/auth/signup", newUser)
}

// POST Login
const loginService = (user)=> {
  return service.post("/auth/login", user)
}

// GET Verify
const verifyService = () => {
  // send token
  return service.get("/auth/verify");
}

export {
  signupService,
  loginService,
  verifyService
}