import React from 'react';
import {useUser} from './user-context';
import Api from '../Helper/Api';

const UserGroupsContext = React.createContext();

const UserGroupsProvider = (props) => {
	const user = useUser();
	const userGroups = Api.getGroupsByIds(user.GroupsBelong); 
	return <UserGroupsContext.Provider value={userGroups} {...props} />
}

const useUserGroups = () => {
	const context = React.useContext(UserGroupsContext)
	if (context === undefined) {
		throw new Error('useUserGroups must be used within a UserGroupsProvider');
	}
	return context
}

export {UserGroupsProvider, useUserGroups};
