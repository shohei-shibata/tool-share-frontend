import React from 'react';
import {useUserTools} from '../context/user-tools-context';
import ToolsList from '../Groups/ToolsList';
import AddToolForm from '../Groups/Forms/AddToolForm';

function MyTools() {
	const {data, getToolById, addTool, removeTool} = useUserTools();
	const tools = data;
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
			<ToolsList tools={tools} />
			<h2>Add a new Tool</h2>
			<AddToolForm onSubmit={handleSubmitNewTool} />
			<h2>Delete a Tool</h2>
			<ToolsList tools={tools} onClick={handleRemoveTool} />
		</div>
	);
}

export default MyTools;
