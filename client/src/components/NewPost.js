import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NewPost extends Component {
	state = {};
	render() {
		return (
			<div className='col mt-5 ml-2'>
                <h1 className="display-3">New Post</h1>
				<Form className='w-50' action="/posts" method="POST">
					<FormGroup>
						<Label>Title</Label>
						<Input
							type='text'
							name='post[title]'
							placeholder='Title'
						/>
					</FormGroup>
                    <FormGroup>
						<Label>Price</Label>
						<Input
							type='text'
							name='post[price]'			
							placeholder='$'
						/>
					</FormGroup>
                    <FormGroup>
						<Label>Description</Label>
						<Input
							type='text'
							name='post[description]'			
							placeholder='...'
						/>
					</FormGroup>					
					<FormGroup>
						<Label for='exampleFile'>Select images</Label>
						<Input type='file' name='post[images]' id='exampleFile' />
						<FormText color='muted'>
							This is some placeholder block-level help text for the above
							input. It's a bit lighter and easily wraps to a new line.
						</FormText>
					</FormGroup>
					<Button>Submit</Button>
				</Form>
			</div>
		);
	}
}

export default NewPost;
