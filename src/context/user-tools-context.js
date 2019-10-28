import React from 'react';
import {useUser} from './user-context';
import Api from '../Helper/Api';

const UserToolsContext = React.createContext();

const UserToolsProvider = (props) => {
	const user = useUser();
	const userTools = Api.getToolsByGroupIds(user.groupBelong);
	return <UserToolsContext.Provider value={userTools} {...props} />
}

const useUserTools = () => {
	const context = React.useContext(UserToolsContext)
	if (context === undefined) {
		throw new Error('useUserTools must be used within a UserToolsProvider');
	}
	return context
}

export {UserToolsProvider, useUserTools};
