import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchGroup from '../Search';

describe('Search Group', () => {
	const props = {
		label: 'search'		
	};
	it('renders without crashing', () => {
		render(<SearchGroup />);
	});
	it('has an input field', () => {
		const { getByTestId } = render(<SearchGroup {...props} />);
		const inputNode = getByTestId('search-input');
	});
	it('triggers an onChange function on input field change', () => {
		const handleChange = (e) => {
			expect(e.target.value).toBe('hello world');
		};
		const { getByTestId } = render(
			<SearchGroup 
				onChange={handleChange} 
			/>
		);
		const inputNode = getByTestId('search-input');
		fireEvent.change(inputNode, { value: 'ihello world' });
	});
});
