import React, {useState} from 'react';
import ToolsList from '../Groups/List/Tools';
import TextInput from '../Components/Input/Text';
import Checkbox from '../Components/Input/Checkbox';
import Tools from '../Helper/Tools';
import {useUser} from '../context/user-context';
import {useUserTools} from '../context/user-tools-context';
import {useUserGroups} from '../context/user-groups-context';

// Move these into the API helper
const getCheckedGroupsArray = (groupsState) => {
	const onlyChecked = groupsState.filter(each => {
		return each.checked;
	});
	return onlyChecked.map(each => { return  each.data._id });
};


function Search() {
	return (
		<div>
			<h2>Search</h2>
			<ToolsSearch />
		</div>
	);
}

function ToolsSearch() {
	const user = useUser();
	const { accessibleTools } = useUserTools();
	const availableTools = accessibleTools.filter(item => {
	  return item.owner._id !== user._id;
	});
	const userGroups = useUserGroups();

	const placeholder = 'Type in a tool name';
	const initialTextInput = '';
	const groupsInitialState = userGroups.map(group => {
		return {
			data: group,
			checked: true
		};
	});

	const [ textInput, setTextInput ] = useState(initialTextInput);
	const [ tools, setTools ] = useState(availableTools.filter(item => {
	  return user._id !== item.owner._id;
	}));
	const [ groups, setGroups ] = useState(groupsInitialState);	

	const handleInputChange = (e) => {
		const newValue = e.target.value;
		setTextInput(newValue);
		setTools(Tools.filterToolsByKeyword(newValue, availableTools));
	};
	const handleCheckboxChange = (e) => {
		let nextGroupsState = groups.map(group => {
			let nextGroup = Object.assign({}, group);
			if (group.data._id.toString() === e.target.value) {
				nextGroup.checked = e.target.checked;
			}
			return nextGroup;
		});
		setGroups(nextGroupsState);
		let checkedGroupsArray = getCheckedGroupsArray(nextGroupsState);
		setTools(Tools.filterToolsByGroups(checkedGroupsArray, availableTools)); 
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const groupsList = groups.map(group => {
		return (
			<li key={group.data._id}>
				<Checkbox 
					value={group.data._id} 
					text={group.data.name} 
					onChange={handleCheckboxChange}
					checked={group.checked}
				/>
			</li>
		);
	});
	return (
		<div id='tool-search'>
			<form onSubmit={handleSubmit}>
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
				{ tools && tools.length > 0 ? 
					<ToolsList tools={tools} /> : 
					<li>No Matches!</li> 
				}
			</div>
		</div>
	);
}

export default Search;
