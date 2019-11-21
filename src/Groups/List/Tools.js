import React from 'react';
import ToolCard from '../../Groups/Card/Tool';

const ToolsList = ({tools, onClick}) => {
	return (
		<div>
		  {tools && tools.map ?
		  	tools.map(tool => {
			    return (
				<ToolCard key={tool._id} tool={tool} />
			    );
			}) 
		  :
			<li>No tools found!</li>
		  }
		</div>
	);
}

export default ToolsList;
