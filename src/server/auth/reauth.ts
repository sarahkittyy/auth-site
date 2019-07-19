import express from 'express';
import jwt from 'jsonwebtoken';

/**
 * @file Reloads the short-term api token with the long-term auth token.
 */
export default function reauth(req: express.Request, res: express.Response)
{
	jwt.verify(req.session.refreshtoken, process.env.SECRET, {
		
	}, (err, decoded) => {
		if(!err)
		{
			let apidata: any = jwt.decode(req.session.apitoken, {json: true});
			req.session.apitoken = jwt.sign({username: apidata.username}, process.env.SECRET, {
				expiresIn: 15
			});
			res.status(200).send('Successful re-authentication');
		}
		else
		{
			res.status(401).send('Invalid authorization');
		}
	});
}