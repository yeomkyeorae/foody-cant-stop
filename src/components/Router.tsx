import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import Navigation from './Navigation';

function AppRouter({ isLoggedIn }: { isLoggedIn: boolean }) {
	return (
		<Router>
			<Navigation />
			{isLoggedIn ? (
				<div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</div>
			) : null}
		</Router>
	);
}

export default AppRouter;
