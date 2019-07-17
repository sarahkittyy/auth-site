import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './Home';

// Map of client-side routes.
export default (
	<Switch>
		<Route exact path="/" component={Home} />
	</Switch>	
);