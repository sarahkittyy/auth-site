import React from 'react';
import './Login.css';
import $ from 'jquery';

export interface LoginState
{
	
}

export default class Login extends React.Component<{}, LoginState>
{
	public constructor(props: any)
	{
		super(props);
		
		this.state = {};
	}
	
	public render()
	{
		return (
			<h1>
				Login.
			</h1>	
		);
	}
}