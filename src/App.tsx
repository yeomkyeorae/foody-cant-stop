import React, { useState, useEffect } from 'react';
import AppRouter from './components/Router';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoggedIn(true);
		}, 5000);
	}, []);

	return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
