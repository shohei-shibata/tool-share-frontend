import React from 'react';

const ToolsList = ({tools, withOwner, onClick}) => {
	return (
		<ul>
		  {tools && typeof tools == 'object' ?
		  	tools.map(tool => {
				  return <li key={tool._id} onClick={()=>onClick(tool._id)}>{ withOwner ? 
				  		`${tool.name} (${tool.owner.name})` : 
						tool.name }
					</li> 
			}) :
			<li>No tools found!</li>
		  }
		</ul>
	);
}

export default ToolsList;
