import React from 'react';
import {useUserGroups} from '../context/user-groups-context';

function MyGroups() {
	const groups = useUserGroups();
	return (
		<div>
			<h2>My Groups</h2>
			<p>{JSON.stringify(groups)}</p>
			<ul>
			{
				groups.map(group => {
					return <li>{group.name}</li>
				})
			}
			</ul>
		</div>
	);
}

export default MyGroups;
