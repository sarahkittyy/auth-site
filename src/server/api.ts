import express from 'express';

const api = express.Router();

api.get('/', (req, res) => {
	res.send('hello there');
});

export default api;