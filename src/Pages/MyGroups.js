import React from 'react';
import {useUserGroups} from '../context/user-groups-context';

function MyGroups() {
	const groups = useUserGroups();
	return (
		<div>
			<h2>My Groups</h2>
			<ul>
			{
				groups.map(group => {
					return <li key={group._id}>{group.name}</li>
				})
			}
			</ul>
		</div>
	);
}

export default MyGroups;
