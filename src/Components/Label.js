import React from 'react'

const Label = ({ forId, text }) => {
	return (
		<label htmlFor={forId}>{text}</label>
	);
}

export default Label;
