import express from 'express';
import jwt from 'jsonwebtoken';

/**
 * @brief Authorization middleware that searches for a valid auth token.
 */
export default function (req: express.Request, res: express.Response, next: express.NextFunction)
{
	// Get the api token.
	let token: string = req.session.apitoken || 'invalid-token';
	
	// Validate the token.
	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if(!err)
		{
			next();
		}
		else
		{
			res.status(401).send('Token not valid.');
		}
	});
}