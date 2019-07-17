import express from 'express';
import appRoot from 'app-root-path';
import api from './api';

// Main app
const app = express();
// Static paths.
app.use('/public', express.static('public')); // For index.html and images.
app.use('/assets', express.static('assets')); // For built react client JS files.

// API backend endpoint.
app.use('/api', api);

// Send all other routes to react for react-router to take over.
app.get('/*', (req, res) => {
	res.sendFile(appRoot.resolve('./public/index.html'))
});

// Listen on port 3000.
app.listen(3000, () => {
	console.log('Listening!...');
});