import React, { useState } from 'react';
import ToolsSearch from '../Groups/ToolsSearch';

import Api from '../Helper/Api';

function Search({user}) {
	return (
		<div>
			<h2>Search</h2>
			<ToolsSearch />
		</div>
	);
}

export default Search;
