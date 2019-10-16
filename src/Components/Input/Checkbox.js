import React from 'react';

const Checkbox = ({value, text}) => {
	return (
		<div>
			<label><input type='checkbox' value={value} />{text.toString()}</label>
		</div>
	);
};

export default Checkbox;
