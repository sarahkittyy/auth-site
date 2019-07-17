import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Login from './Login';

// Map of client-side routes.
export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/login" component={Login} />
	</Switch>	
);