import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './components/Main';
import NewPost from './components/NewPost';

class App extends Component {
	state = {  }
	render() { 
		return ( 
			<Router>
				<Switch>
					<Route path='/posts' exact={true} component={Main} />
					<Route path='/new' exact={true} component={NewPost} />
				</Switch>
			</Router>

		 );
	}
}
 
export default App;