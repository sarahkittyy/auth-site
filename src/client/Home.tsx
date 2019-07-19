import React from 'react';
import './Home.css';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

export interface HomeState
{
	authorized: boolean;
	username: string;
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
			username: ''
		};
	}
	
	public componentDidMount()
	{
		document.title = "Homepage";
		
		$.ajax({
			method: 'GET',
			url: '/api/me',
			success: (data) => {
				this.setState({
					username: data
				});
			},
			error: (xhr) => {
				$.ajax({
					method: 'GET',
					url: '/api/reauth',
					success: (data) => {
						location.reload();
					},
					error: (xhr) => {
						this.setState({
							authorized: false
						});
					}
				})
			}
		});
	}
	
	public render()
	{
		return (
			<div className="main">
				<h1>
					{this.state.username.length > 0 ? `Logged in as ${this.state.username}` : 'Not logged in.. Redirecting...'}
				</h1>
				{this.state.authorized ? '' : <Redirect to='/login' />}
			</div>
		);
	}
}