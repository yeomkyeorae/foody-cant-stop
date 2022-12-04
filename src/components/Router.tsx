import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import Navigation from './Navigation';

function AppRouter({ isLoggedIn }: { isLoggedIn: boolean }) {
	return (
		<Router>
			{isLoggedIn && <Navigation />}
			<Routes>
				{isLoggedIn ? (
					<>
						<Route path="/" element={<Home />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</>
				) : (
					<Route path="/" element={<Auth />} />
				)}
			</Routes>
		</Router>
	);
}

export default AppRouter;
