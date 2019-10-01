import React from 'react'
import TextInput from '../Components/TextInput.js'
import Button from '../Components/Button.js'
import Label from '../Components/Label.js'

const SearchGroup = () => {
	return (
		<form>
			<Label forId='search-input' text="Type in a tool name to see what's available to borrow." />
			<TextInput id='search-input' name='search-input' placeholder='Type a tool name' />
			<Button text='Search' />
		</form>
	);
}

export default SearchGroup;
