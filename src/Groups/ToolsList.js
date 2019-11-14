import React from 'react';
import {useUser} from '../context/user-context';

const OwnerTool = ({tool, onClick}) => {
  	let requests = '';
	if (tool.requests.length > 0) { requests = `(Borrow Requests: ${tool.requests.length})` }
	return (
		<li onClick={()=>onClick(tool._id)}>{`${tool.name} ${requests}`}</li>
	);
}

const NonOwnerTool = ({tool, onClick}) => {
	return (
		<li onClick={()=>onClick(tool._id)}>{`${tool.name} (${tool.owner.name})`}</li>
	);
}


const ToolsList = ({tools, onClick}) => {
  	const user = useUser();
	return (
		<ul>
		  {tools && typeof tools == 'object' ?
		  	tools.map(tool => {
			    const owner = (tool.owner._id === user._id);
			    return (
				owner ?
				  	<OwnerTool key={tool._id} tool={tool} onClick={onClick} />
				:
					<NonOwnerTool key={tool._id} tool={tool} onClick={onClick} />
			    );
			}) 
		  :
			<li>No tools found!</li>
		  }
		</ul>
	);
}

export default ToolsList;
