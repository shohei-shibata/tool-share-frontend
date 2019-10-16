import React, { useState } from 'react';
import TextInput from '../Components/Input/Text';
import LabelDefault from '../Components/Label/Default';
import Tools from '../Helper/Tools';

// To Be Refactored to separate modules:
import fakeTools from '../mock_data/fakeTools';

const SearchGroup = () => {
	const label = '';
	const placeholder = 'Type in a tool name';
	const initialTextInput = '';
	const allTools = fakeTools;

	const [ textInput, setTextInput ] = useState(initialTextInput);
	const [ tools, setTools ] = useState(fakeTools);
	const handleChange = (e) => {
		const newValue = e.target.value;
		setTextInput(newValue);
		setTools(Tools.filterToolsByKeyword(newValue, allTools));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const toolsList = tools.map(tool => {
		return <li key={tool._id}>{tool.name} ({tool.owner.name})</li> 
	}); 
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<LabelDefault forId='search' text={ label } />
				<br/>
				<TextInput 
					data-testid='search-input'
					id='search' 
					name='search-input' 
					placeholder={placeholder} 
					value={textInput} 
					onChange={handleChange} 
					autoFocus={true}
				/>
			</form>
			<div>
				<h3>Search Results:</h3>
				<ul>{ tools.length > 0 ? toolsList : <li>No Matches!</li> }</ul>
			</div>
		</div>
	);
}

export default SearchGroup;
