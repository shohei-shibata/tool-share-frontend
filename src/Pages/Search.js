import React from 'react';
import SearchGroup from '../Groups/SearchGroup.js'

function Search() {
	return (
		<div>
			<h2>Search</h2>
			<SearchGroup />
			<p>NOTE: We might want to do away with a Submit button and instead search as you type "onChange"</p>
		</div>
	);
}

export default Search;
