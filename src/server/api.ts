import express from 'express';
import authorize from './auth/authorize';
import login from './auth/login';
import jwt from 'jsonwebtoken';
import reauth from './auth/reauth';

// Main api endpoint.
const api = express.Router();
api.use(express.json());
api.use(express.urlencoded({extended: true}));

// Testing
api.get('/', (req, res) => {
	res.send('hello there');
});

// Get the username from the token.
api.get('/me', authorize, (req, res) => {
	let decoded: any = jwt.decode(req.session.apitoken);
	res.send(decoded.username || 'NULL');
});

// Reauthenticating the api token with the refresh token.
api.get('/reauth', reauth);

// For logging in and generating a token.
api.post('/login', login);

// Export the api router.
export default api;