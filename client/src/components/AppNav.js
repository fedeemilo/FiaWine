import React, { Component } from 'react';
import { Nav, NavItem, NavLink, NavbarBrand, Navbar} from 'reactstrap';

class AppNav extends Component {
	state = {};
	render() {
		return (
			<div>
				<Navbar color='dark' dark expand='md'>
					<NavbarBrand href='/'>
						<h2 className="float-left">FiaWine</h2>
					</NavbarBrand>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<NavLink href='/' className='mt-2'>Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink style={{fontSize: '24px'}} href='/new'>+</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

export default AppNav;
