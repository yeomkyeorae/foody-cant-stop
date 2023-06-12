import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import Navigation from './Navigation';

function AppRouter({ isLoggedIn }: { isLoggedIn: boolean }) {
	return (
		<Router basename="/">
			{isLoggedIn && <Navigation />}
			<Routes>{isLoggedIn ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Auth />} />}</Routes>
		</Router>
	);
}

export default AppRouter;
