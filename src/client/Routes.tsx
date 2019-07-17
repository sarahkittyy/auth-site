import { Route, Switch } from 'react-router-dom';
import React from 'react';
import App from './App';

export default (
	<Switch>
		<Route exact path="/" component={App} />
	</Switch>	
);