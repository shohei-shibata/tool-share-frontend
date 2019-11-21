import React from 'react';
import {useUserTools} from '../context/user-tools-context';
import ToolsList from '../Groups/List/Tools';
import AddToolForm from '../Groups/Forms/AddToolForm';

function MyTools() {
	const {ownTools, getToolById, addTool, removeTool} = useUserTools();
	const handleSubmitNewTool = (newTool) => {
		addTool(newTool);
	}
	const handleRemoveTool = (toolId) => {
	  	const toolFound = getToolById(toolId);
		if (toolFound) {
		  const confirmText = `Are you sure you want to delete ${toolFound.name}?`;
		  if (window.confirm(confirmText)) {
			const toolToDelete = toolFound;
			removeTool(toolToDelete._id);
		  } 
		} else {
		  alert('error finding tool to delete');
		}
	}
	return (
		<div>
			<h2>My Tools</h2>
			<ToolsList tools={ownTools} removeTool={handleRemoveTool}/>
			<h2>Add a new Tool</h2>
			<AddToolForm onSubmit={handleSubmitNewTool} />
		</div>
	);
}

export default MyTools;
