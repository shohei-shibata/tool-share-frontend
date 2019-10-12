import React from 'react';
import { render } from '@testing-library/react';
import ButtonDefault from './Default';

describe('Default Button component', () => {
	test('renders without throwing error', () => {
		const button = render(<ButtonDefault />);
	});
});
