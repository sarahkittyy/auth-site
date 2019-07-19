import express from 'express';
import jwt from 'jsonwebtoken';

/**
 * @brief Take post username / password and validate it, returning a jwt token or an error. 
 */
export default function(req: express.Request, res: express.Response)
{
	// Get the username and passowrd
	let username: string | undefined = req.body.username;
	let password: string | undefined = req.body.password;
	
	//TODO: better username / password validation.
	if(username === 'user' && password === 'password')
	{
		req.session.apitoken = jwt.sign({
			username: username
		}, process.env.SECRET, {
			expiresIn: 15
		});
		req.session.refreshtoken = jwt.sign({
			
		}, process.env.SECRET, {
			expiresIn: 180
		});
		return res.status(200).send('Successfully Authenticated.');
	}
	else
	{
		return res.status(401).send('Invalid username / password.');
	}
}