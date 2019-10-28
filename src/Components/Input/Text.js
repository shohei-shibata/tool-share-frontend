import React, { useState } from 'react';

const TextInput = (props) => {
	const [ input ] = useState('');
	return (
		<input type="text" {...props} />
	);
}

export default TextInput;
