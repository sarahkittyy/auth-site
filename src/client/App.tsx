import React from 'react';
import './App.css';

export interface AppState
{
	
}

export default class App extends React.Component<{}, AppState>
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
				Hello, world!
			</h1>
		);
	}
}