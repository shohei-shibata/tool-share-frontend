import React, { useState } from 'react';

const TextInput = (props) => {
	const [ input ] = useState('');
	const handleChange = (e) => {
		onChange(e.target.value);
	};
	return (
		<input type="text" {...props} />
	);
}

export default TextInput;
