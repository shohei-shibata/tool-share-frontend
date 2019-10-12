import React from 'react';
import { render } from '@testing-library/react';
import SearchGroup from './Search';

describe('Search Group', () => {
	it('renders without throwing error', () => {
		let component = render(<SearchGroup />);
	});
});
