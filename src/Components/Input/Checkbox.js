import React from 'react';

const Checkbox = ({value, text, onChange}) => {
	return (
		<div>
			<label>
			<input 
				type='checkbox' 
				value={value} 
				onChange={onChange}
			/>
				{text.toString()}
			</label>
		</div>
	);
};

export default Checkbox;
