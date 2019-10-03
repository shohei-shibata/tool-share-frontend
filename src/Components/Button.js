import React from 'react';

const Button = ({text, type, onSubmit}) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit();
	}
	return (
		<button type={type} onClick={handleSubmit}>{text}</button>
	);
}

export default Button;


/*	Notes:
 *
 *	- How to style button: https://fvsch.com/styling-buttons/
 *
 *
 */
