import React, { useState } from 'react';

const Input = () => {
	const [ input ] = useState('');
	const handleChange = (e) => {
		
	};
	return (
		<input type="text" onChange={handleChange} />
	);
}

export default Input;
