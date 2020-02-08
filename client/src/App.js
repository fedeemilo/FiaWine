import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: '', apiPosts: '' };
	}

	callAPI() {
		axios
			.get('http://localhost:9000/testAPI')
			.then((res) => {
				const test = res.data;
				this.setState({ apiResponse: test });
			})
			.catch((err) => err);
	}

	callPosts() {
		axios
			.get('http://localhost:9000/posts')
			.then((res) => {
				const posts = res.data;
				this.setState({ apiPosts: posts });
			})
			.catch((err) => err);
	}

	componentDidMount() {
		this.callAPI();
		this.callPosts();
	}

	render() {
		return (
			<div className='App'>
				<h1>{this.state.apiResponse}</h1>
				<h2>{this.state.apiPosts}</h2>
			</div>
		);
	}
}

export default App;
