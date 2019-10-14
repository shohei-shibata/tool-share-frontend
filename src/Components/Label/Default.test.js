import React from 'react';
import { render } from '@testing-library/react';
import LabelDefault from './Default';

describe('Default Label', () => {
	it('renders without crashing', () => {
		render(<LabelDefault />);
	});
});
