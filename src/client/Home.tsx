import React from 'react';
import './Home.css';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

export interface HomeState
{
	authorized: boolean;
	data: string;
}

/**
 * @brief Main homepage.
 */
export default class Home extends React.Component<{}, HomeState>
{
	public constructor(props: any)
	{
		super(props);
		
		this.state = {
			authorized: true,
			data: ''
		};
	}
	
	public componentDidMount()
	{
		document.title = "Homepage";
		
		$.ajax({
			method: 'GET',
			url: '/api/data',
			success: (data) => {
				this.setState({
					data: data
				});
			},
			error: (xhr) => {
				this.setState({
					authorized: false
				});
			}
		});
	}
	
	public render()
	{
		return (
			<h1>
				{this.state.authorized ? '' : <Redirect to='/login' />}
				{this.state.data}
			</h1>
		);
	}
}