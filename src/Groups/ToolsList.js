import React from 'react';

const ToolsList = ({tools}) => {
	return (
		tools.map(tool => {
			return <li key={tool._id}>{tool.name} ({tool.owner.name})</li> 
		})
	);
}

export default ToolsList;
