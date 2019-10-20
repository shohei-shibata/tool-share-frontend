import React, { useState } from 'react';
import TextInput from '../Components/Input/Text';
import Checkbox from '../Components/Input/Checkbox';
import LabelDefault from '../Components/Label/Default';
import Tools from '../Helper/Tools';

// Move these into the API helper
import fakeTools from '../mock_data/fakeTools';
import fakeGroups from '../mock_data/fakeGroups';

const ToolsSearch = () => {
	const label = '';
	const placeholder = 'Type in a tool name';
	const initialTextInput = '';
	const allTools = fakeTools;
	const allGroups = fakeGroups;

	const [ textInput, setTextInput ] = useState(initialTextInput);
	const [ tools, setTools ] = useState(fakeTools);
	const [ groups, setGroups ] = useState(fakeGroups);

	const handleInputChange = (e) => {
		const newValue = e.target.value;
		setTextInput(newValue);
		setTools(Tools.filterToolsByKeyword(newValue, allTools));
	};
	const handleCheckboxChange = (e) => {
		console.log('handle checkbox change', e.target.value, e.target.checked);
		// check all checkboxes and make array of selected group ID's
		setTools(Tools.filterToolsByGroups([7], allTools)); // let's say only 7 is checked
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
