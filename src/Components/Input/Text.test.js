import React from 'react';
import { render } from '@testing-library/react';

import TextInput from './Text'

describe('Input', () => {
	const props = {
		value: 'testing',
		name: 'someName',
		placeholder: 'placeholder text',
		onChange: () => {
			return null;
		}
	};
	it('should render', () => {
		render(<TextInput />);
	});
	it('has type of text', () => {
		const { container }  = render(<TextInput />);
		const inputNode = container.querySelector('input');
		expect(inputNode.type).toBe('text');
	});
	
});

/*
 * import React from 'react';
 * const TextInput = ({ name, placeholder, value, onChange }) => {
 * const handleChange = (e) => { 
 * 	onChange(e.target.value); 
 * }
 *
 * return (
 * 	<input 
 * 	name={name} 
 * 	type='text' 
 * 	placeholder={placeholder} 
 * 	value={value}
 * 	onChange={handleChange} />
 * 	);
 * }
 *
 * export default TextInput;
 */
