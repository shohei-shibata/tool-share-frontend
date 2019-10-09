import React, { useState } from 'react'
import TextInput from '../Components/TextInput.js'
import ButtonDefault from '../Components/ButtonDefault.js'
import Label from '../Components/Label.js'

const initialState = "";

const SearchGroup = () => {
	const [ textInput, setTextInput ] = useState(initialState);
	const handleSubmit = () => {
		console.log("Submit: " + textInput);
		setTextInput(initialState)
	}
	return (
		<form>
			<Label forId='search-input' text="Type in a tool name to see what's available to borrow." />
			<br/>
			<TextInput 
				id='search-input' 
				name='search-input' 
				placeholder='Type a tool name' 
				value={textInput} 
				onChange={(newText)=> setTextInput( newText )} 
			/>
			<ButtonDefault type='submit' text='Search' onSubmit={handleSubmit}/>
		</form>
	);
}

export default SearchGroup;
