import express from 'express';
import authorize from './auth/authorize';
import login from './auth/login';

// Main api endpoint.
const api = express.Router();
api.use(express.json());
api.use(express.urlencoded({extended: true}));

// Testing
api.get('/', (req, res) => {
	res.send('hello there');
});

api.get('/data', authorize, (req, res) => {
	res.send('secret homepage data');
});

// For logging in and generating a token.
api.post('/login', login);

// Export the api router.
export default api;