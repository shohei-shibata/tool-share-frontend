import React from 'react';

const ButtonDefault = ({ type, text, onSubmit}) => {
	const handleClick = (e) => {
		onSubmit(e.target.value);
	}
	return <button type={type} onClick={handleClick}>{text}</button>
}

export default ButtonDefault;
