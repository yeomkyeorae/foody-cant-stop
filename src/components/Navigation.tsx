import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
	display: flex;
	justify-content: center;
	margin-top: 50px;
	padding: 0;
	list-style: none;
`;

function Navigation() {
	return (
		<nav>
			<Ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link to="/calendar">Calendar</Link>
				</li>
			</Ul>
		</nav>
	);
}

export default Navigation;
