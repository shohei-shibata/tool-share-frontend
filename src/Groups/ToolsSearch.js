import React, { useState } from 'react';
import TextInput from '../Components/Input/Text';
import Checkbox from '../Components/Input/Checkbox';
import LabelDefault from '../Components/Label/Default';
import Tools from '../Helper/Tools';
import Api from '../Helper/Api';

import {useUser} from '../context/user-context';

// Move these into the API helper
const getCheckedGroupsArray = (groupsState) => {
	const onlyChecked = groupsState.filter(each => {
		return each.checked;
	});
	return onlyChecked.map(each => { return  each._id });
};

const ToolsSearch = () => {
	const user = useUser();
	const allTools = Api.getToolsByGroupIds(user.groupBelong);
	const allGroups = Api.getGroupsByIds(user.groupBelong);

	const label = '';
	const placeholder = 'Type in a tool name';
	const initialTextInput = '';
	const groupsInitialState = allGroups.map(group => {
		return {
			_id: group._id,
			name: group.name,
			checked: true
		};
	});

	const [ textInput, setTextInput ] = useState(initialTextInput);
	const [ tools, setTools ] = useState(allTools);
	const [ groups, setGroups ] = useState(groupsInitialState);	

	const handleInputChange = (e) => {
		const newValue = e.target.value;
		setTextInput(newValue);
		setTools(Tools.filterToolsByKeyword(newValue, allTools));
	};
	const handleCheckboxChange = (e) => {
		let nextGroupsState = groups.map(group => {
			let nextGroup = Object.assign({}, group);
			if (group._id.toString() === e.target.value) {
				nextGroup.checked = e.target.checked;
			}
			return nextGroup;
		});
		setGroups(nextGroupsState);
		let checkedGroupsArray = getCheckedGroupsArray(nextGroupsState);
		setTools(Tools.filterToolsByGroups(checkedGroupsArray,  allTools)); 
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const toolsList = tools.map(tool => {
		return <li key={tool._id}>{tool.name} ({tool.owner.name})</li> 
	}); 
	const groupsList = groups.map(group => {
		return (
			<li key={group._id}>
				<Checkbox 
					value={group._id} 
					text={group.name} 
					onChange={handleCheckboxChange}
				/>
			</li>
		);
	});
	return (
		<div id='tool-search'>
			<form onSubmit={handleSubmit}>
				<LabelDefault forId='search' text={ label } />
				<br/>
				<TextInput 
					data-testid='search-input'
					id='search' 
					name='search-input' 
					placeholder={placeholder} 
					value={textInput} 
					onChange={handleInputChange} 
					autoFocus={true}
				/>
				<h3>My Groups:</h3>
				<ul>{ groups.length > 0 ? groupsList : <li>No Groups!</li> }</ul>
			</form>
			<div>
				<h3>Search Results:</h3>
				<ul>{ tools.length > 0 ? toolsList : <li>No Matches!</li> }</ul>
			</div>
		</div>
	);
}

export default ToolsSearch;
