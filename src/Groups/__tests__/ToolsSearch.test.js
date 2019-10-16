import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToolsSearch from '../ToolsSearch';

describe('Tools Search Group', () => {
	const props = {
		label: 'search'		
	};
	it('renders without crashing', () => {
		render(<ToolsSearch />);
	});
	it('has an input field', () => {
		const { getByTestId } = render(<ToolsSearch {...props} />);
		const inputNode = getByTestId('search-input');
	});
	it('triggers an onChange function on input field change', () => {
		const handleChange = (e) => {
			expect(e.target.value).toBe('hello world');
		};
		const { getByTestId } = render(
			<ToolsSearch 
				onChange={handleChange} 
			/>
		);
		const inputNode = getByTestId('search-input');
		fireEvent.change(inputNode, { value: 'ihello world' });
	});
});
