import React from 'react';

const ToolsList = ({tools, withOwner}) => {
	return (
		tools && typeof tools == 'object' ?
			tools.map(tool => {
				return <li key={tool._id}>{ withOwner ? tool.name : `${tool.name} (${tool.owner.name})`}</li> 
			}) :
			<li>No tools found!</li>
	);
}

export default ToolsList;
