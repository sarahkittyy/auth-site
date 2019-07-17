import React from 'react';
import './Login.css';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';

export interface LoginState
{
	redirect: boolean;
	username: string;
	password: string;
}

export default class Login extends React.Component<{}, LoginState>
{
	public constructor(props: any)
	{
		super(props);
		
		this.state = {
			redirect: false,
			username: '',
			password: ''
		};
	}
	
	private submitForm(e: React.FormEvent)
	{
		e.preventDefault();
		
		$.ajax({
			method: 'POST',
			url: '/api/login',
			data: {
				username: this.state.username,
				password: this.state.password
			},
			success: (data) => {
				this.setState({
					redirect: true
				});
			},
			error: (xhr) => {
				alert(xhr.status + ' ' + xhr.statusText);
			}
		});
	}
	
	public render()
	{
		return (
			<div className="main">
				{this.state.redirect ? <Redirect to="/" /> : ''}
				<form className="form" onSubmit={(e)=>this.submitForm(e)}>
					<p id="text">Username</p><br />
					<input type="text" className="inputBox" value={this.state.username} name="username"
						onChange={e => this.setState({username: e.target.value})}></input><br />
					<p id="text">Password</p><br />
					<input type="password" className="inputBox" value={this.state.password} name="password"
						onChange={e => this.setState({password: e.target.value})}></input><br />
					<button type="submit" className="submitButton">Submit</button>
				</form>
			</div>	
		);
	}
}