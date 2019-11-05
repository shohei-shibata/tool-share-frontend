import React, {useState} from 'react';
import {useUser} from '../context/user-context';
import {useUserTools} from '../context/user-tools-context';
import {useUserGroups} from '../context/user-groups-context';
import TextInput from '../Components/Input/Text';
import Checkbox from '../Components/Input/Checkbox';
import ButtonDefault from '../Components/Button/Default';

function MyTools() {
	const {tools, addTool, removeTool} = useUserTools();
	const user = useUser();
	const groups = useUserGroups();
	const newToolInitialState = {
		_id: '',
		name: '',
		owner: {_id: user._id, name: user.name},
		accessibleGroups: user.groupBelong, 
		note: ''
	}
	const [newTool, setNewTool] = useState(newToolInitialState);
	const handleInputChange = (e) => {
		let newState = Object.assign({}, newTool);
		newState[e.target.name] = e.target.value;
		setNewTool(newState);
	}
	const handleCheckboxChange = (e) => {
		let newGroups = [...newTool.accessibleGroups];
		let index = newGroups.indexOf(e.target.value);
		if (e.target.checked) {
			if (index >= 0) { console.log('already exists') }
			else { 
				let newState = Object.assign({}, newTool);
				newState.accessibleGroups.push(e.target.value);
				setNewTool(newState);
			} 
		} else {
			if (index >= 0) {
				let newState = Object.assign({}, newTool);
				newState.accessibleGroups.splice(index, 1);
				setNewTool(newState);
			} else {
				console.log('group id not found');
			}
		}
	}
	const shouldGroupBeChecked = (id) => {
		if (newTool.accessibleGroups.indexOf(id) >= 0) { return true }
		return false;
	}
	const handleSubmitNewTool = (e) => {
		e.preventDefault();
		addTool(newTool);
		setNewTool(newToolInitialState);
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
			<ul>
			{
				tools.map(tool => {
					return <li key={tool._id}>{tool.name}</li>
				})
			}
			</ul>
			<h2>Add a new Tool</h2>
			<form onSubmit={handleSubmitNewTool}>
				<TextInput placeholder='Name' name='name' value={newTool.name} onChange={handleInputChange} />	
				<TextInput placeholder='Note' name='note' value={newTool.note} onChange={handleInputChange} />	
				<ul>
					{ groups.map(group => {
						return (
							<Checkbox 
								key={group._id}
								value={group._id} 
								text={group.name} 
								onChange={handleCheckboxChange}
								checked={shouldGroupBeChecked(group._id)}
							/>		
						);
					}) }
				</ul>
				<ButtonDefault value='Add a Tool' type='submit' />
			</form>
			<h2>Delete a Tool</h2>
			<ul>
				{tools.map(tool => {
					return (
						<li key={tool._id} onClick={handleRemoveTool}>{tool.name}</li>
					);
				})}
			</ul>
		</div>
	);
}

export default MyTools;
