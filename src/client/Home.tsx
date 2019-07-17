import React from 'react';
import './Home.css';

export interface HomeState
{
	
}

/**
 * @brief Main homepage.
 */
export default class Home extends React.Component<{}, HomeState>
{
	public constructor(props: any)
	{
		super(props);
		
		this.state = {};
	}
	
	public componentDidMount()
	{
		document.title = "Homepage";	
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