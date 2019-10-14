import React from 'react';
import { render } from '@testing-library/react';
import About from '../About';

describe('About page', () => {
	it('renders without crashing', () => {
		render(<About />);
	});
});
