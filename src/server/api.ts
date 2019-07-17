import express from 'express';

// Main api endpoint.
const api = express.Router();

// Testing
api.get('/', (req, res) => {
	res.send('hello there');
});

// Export the api router.
export default api;