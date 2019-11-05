import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import TextInput from './Text'

describe('Input', () => {
	afterEach(cleanup);

	const props = {
		name: 'someName',
		placeholder: 'placeholder text',
	};
	const { container }  = render(
		<TextInput {...props} />
	);
	const inputNode = container.querySelector('input');
	it('should render', () => {
		render(<TextInput />);
	});
	it('has type of text', () => {
		expect(inputNode.type).toBe('text');
	});
	it('accepts a placeholder prop and uses it as its placeholder', () => {
		expect(inputNode.placeholder).toBe(props.placeholder);
	});
	it('accepts a name prop and uses it as its name', () => {
		expect(inputNode.name).toBe(props.name);
	});
	it('triggers the onChange function when user changes its value', () => {
		const handleChange = (e) => {
			expect(e.target.value).toBe('new value');
		};
		const { getByTestId } = render(
			<TextInput 
				onChange={handleChange} 
				data-testid='onChange-test' 
				value='initial value' 
			/>
		);
		const node = getByTestId('onChange-test');
		expect(node.value).toBe('initial value');
		fireEvent.change(node, { target: { value: 'new value' }});
	});
});

