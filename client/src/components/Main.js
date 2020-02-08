import React, { Component } from 'react';
import axios from 'axios';
import AppNav from './AppNav';
import {
	Form,
	FormGroup,
	Label,
	Input,
	Container,
	Button,
	ListGroup,
	ListGroupItem,
	Row,
	Col,
	CustomInput,
	Alert,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle
} from 'reactstrap';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: '', apiPosts: [] };
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
		console.log(this.state);
	}

	render() {
		console.log(this.state);
		return (
			<div className='App'>
				<AppNav />
				<h1>{this.state.apiResponse}</h1>
				{this.state.apiPosts.map((post) => (
					<div>
						<Col xs='3'>
							<Card>
								<CardImg
									top
									width='100%'
									src={post.images[0]}
									alt='Card image cap'
								/>
								<CardBody>
									<CardTitle>{post.title}</CardTitle>
									<CardText>{post.description}</CardText>
								</CardBody>
							</Card>
						</Col>
					</div>
				))}
			</div>
		);
	}
}

export default Main;
