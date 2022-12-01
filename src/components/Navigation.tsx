import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<nav>
			<ul style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/dashboard">Dashboard</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
