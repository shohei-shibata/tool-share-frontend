import React, { useState } from 'react';

const TextInput = () => {
	const [ input ] = useState('');
	const handleChange = (e) => {
		
	};
	return (
		<input type="text" onChange={handleChange} />
	);
}

export default TextInput;
