import React, { useState } from 'react';
import TextInput from '../Components/Input/Text';
import LabelDefault from '../Components/Label/Default';

// To Be Refactored to separate modules:
import fakeTools from '../mock_data/fakeTools';
const nameMatches = (keyword, dataString) => {
	if (keyword.length > 1) {
		let regex = new RegExp(keyword);
		return regex.test(dataString);
	} else {
		return false;
	}
};


const SearchGroup = () => {
	const label = '';
	const placeholder = 'Type in a tool name';
	const initialState = '';
	const [ textInput, setTextInput ] = useState(initialState);
	const handleChange = (e) => {
		setTextInput(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const filteredTools = () => {
		let arr = fakeTools.filter(tool => {
			return nameMatches(textInput, tool.name);
		});
		return arr;
	};
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
				/>
			</form>
			<div>
				<h3>Search Results:</h3>
				<ul>{ 
					let arr = filteredTools();
					arr.map(tool => {
					return <li>{tool.name}</li> 
				  })
				}</ul>
			</div>
		</div>
	);
}

export default SearchGroup;
