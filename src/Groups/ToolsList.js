import React from 'react';
import {useUser} from '../context/user-context';

const OwnerTool = ({tool, onClick}) => {
  	let requests = '';
	if (tool.requests.length > 0) { requests = `(Borrow Requests: ${tool.requests.length})` }
	return (
		<li onClick={onClick}>{`${tool.name} ${requests}`}</li>
	);
}

const NonOwnerTool = ({tool, onClick}) => {
	return (
		<li onClick={onClick}>{`${tool.name} (${tool.owner.name})`}</li>
	);
}


const ToolsList = ({tools, onClick}) => {
  	const user = useUser();
	const handleClick = (toolId) => {
	  if (onClick) {
	    onClick(toolId);
	  } else {
	    console.log('no onClick function found');
	  }
	}
	return (
		<ul>
		  {tools && typeof tools == 'object' ?
		  	tools.map(tool => {
			    const owner = (tool.owner._id === user._id);
			    return (
				owner ?
				  	<OwnerTool key={tool._id} tool={tool} onClick={()=>handleClick(tool._id)} />
				:
					<NonOwnerTool key={tool._id} tool={tool} onClick={()=>handleClick(tool._id)} />
			    );
			}) 
		  :
			<li>No tools found!</li>
		  }
		</ul>
	);
}

export default ToolsList;
