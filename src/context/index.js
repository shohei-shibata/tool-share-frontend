import React from 'react';
import {AuthProvider} from './auth-context';
import {UserProvider} from './user-context';
import {UserToolsProvider} from './user-tools-context';
import {UserGroupsProvider} from './user-groups-context';

const AppProviders = ({children}) => {
	return (
		<AuthProvider>
			<UserProvider>
				<UserToolsProvider>
					<UserGroupsProvider>
						{children}
					</UserGroupsProvider>
				</UserToolsProvider>
			</UserProvider>
		</AuthProvider>
	);
}

export default AppProviders;
