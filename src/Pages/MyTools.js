import React from 'react';
import {useUserTools} from '../context/user-tools-context';
import ToolsList from '../Groups/ToolsList';
import AddToolForm from '../Groups/Forms/AddToolForm';

function MyTools() {
	const {data, addTool, removeTool} = useUserTools();
	const tools = data;
	const handleSubmitNewTool = (newTool) => {
		addTool(newTool);
	}
	const handleRemoveTool = (e) => {
		const toolName = e.target.innerText;
		const confirmText = `Are you sure you want to delete ${toolName}?`
		if (window.confirm(confirmText)) {
			const toolToDelete = tools.filter(tool => {
				return tool.name === toolName;
			});
			if (toolToDelete.length === 1) {
				removeTool(toolToDelete[0]._id);
			} else if (toolToDelete.length < 0) {
				console.log('Remove Tool: no entries found');
			} else {
				console.log('Remove Tool: more than one entries found');
			}
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
