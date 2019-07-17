import express from 'express';
import appRoot from 'app-root-path';
import api from './api';

const app = express();
app.use('/public', express.static('public'));
app.use('/assets', express.static('assets'));

app.use('/api', api);

app.get('/*', (req, res) => {
	res.sendFile(appRoot.resolve('./public/index.html'))
});

app.listen(3000, () => {
	console.log('Listening!...');
});