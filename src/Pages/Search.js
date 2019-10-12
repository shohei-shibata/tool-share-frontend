import React, { useState } from 'react';
import SearchGroup from '../Groups/Search.js'

import requestApi from '../Utility/requestApi.js'

function Search() {
	const [ myGroups, setMyGroups ] = useState(requestApi.getMyGroups());
	const myGroupsList = myGroups.map(group => {
		return <li key={group._id.toString()}>{group.name}</li>
	});

	return (
		<div>
			<h2>Search</h2>
			<SearchGroup />
			<p>NOTE: We might want to do away with a Submit button and instead search as you type "onChange"</p>
			<h3>My Groups:</h3>
			<ul>{myGroupsList}</ul>
			<h3>Searchable Tools:</h3>
			<ul></ul>
		</div>
	);
}

export default Search;
