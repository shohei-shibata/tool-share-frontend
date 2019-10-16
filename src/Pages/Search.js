import React, { useState } from 'react';
import SearchGroup from '../Groups/Search.js'

import requestApi from '../Helper/requestApi.js'

function Search() {
	const [ myGroups, setMyGroups ] = useState(requestApi.getMyGroups());
	const myGroupsList = myGroups.map(group => {
		return <li key={group._id.toString()}>{group.name}</li>
	});
	return (
		<div>
			<h2>Search</h2>
			<SearchGroup />
			<h3>My Groups:</h3>
			<ul>{myGroupsList}</ul>
		</div>
	);
}

export default Search;
