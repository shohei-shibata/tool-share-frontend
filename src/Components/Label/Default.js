import React from 'react'

const LabelDefault = ({ forId, text }) => {
	return (
		<label htmlFor={forId}>{text}</label>
	);
}

export default LabelDefault;
