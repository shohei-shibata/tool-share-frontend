import React from 'react';
import { render } from '@testing-library/react';
import MyGroups from '../MyGroups';

describe('MyGroups page', () => {
	it('renders without crashing', () => {
		render(<MyGroups />);
	});
});
