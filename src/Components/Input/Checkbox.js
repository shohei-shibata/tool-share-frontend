import React from 'react';

const Checkbox = ({value, text, onChange, checked}) => {
	return (
		<div>
			<label>
			<input 
				type='checkbox' 
				value={value} 
				onChange={onChange}
				checked={checked}
			/>
				{text.toString()}
			</label>
		</div>
	);
};

export default Checkbox;
