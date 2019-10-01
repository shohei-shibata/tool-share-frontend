import React from 'react';

const TextInput = ({ name, placeholder, onChange }) => {
	return (
		<input name={name} type='text' placeholder={placeholder} onchange={onChange} />
	);
}

export default TextInput;
