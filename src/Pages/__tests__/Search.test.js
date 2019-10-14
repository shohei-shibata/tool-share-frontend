import React from 'react';
import { render } from '@testing-library/react';
import Search from '../Search';

describe('Search page', () => {
	it('renders without crashing', () => {
		render(<Search />);
	});
});
