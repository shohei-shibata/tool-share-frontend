import React from 'react';
import { render } from '@testing-library/react';
import MyTools from '../MyTools';

describe('MyTools page', () => {
	it('renders without crashing', () => {
		render(<MyTools />);
	});
});
