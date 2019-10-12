import React from 'react';

const TextInput = ({ name, placeholder, value, onChange }) => {
	const handleChange = (e) => { 
		onChange(e.target.value); 
	}

	return (
		<input 
			name={name} 
			type='text' 
			placeholder={placeholder} 
			value={value}
			onChange={handleChange} />
	);
}

export default TextInput;
