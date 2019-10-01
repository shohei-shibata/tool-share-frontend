import React from 'react'

const Label = ({ forId, text }) => {
	return (
		<label for={forId}>{text}</label>
	);
}

export default Label;
