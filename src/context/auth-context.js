import User from '../mock_data/fakeAuth';
import React from 'react';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
	const data = {user: User};
	const login = () => {}
	const logout = () => {}
	const register = () => {}

	return (
		<AuthContext.Provider value={{data, login, logout, register}} {...props}/>
	);
}

const useAuth = () => {
	const context = React.useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within a AuthProvider');
	}
	return context;
}

export {AuthProvider, useAuth};
