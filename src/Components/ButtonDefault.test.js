import React from 'react';
import { create } from 'react-test-renderer';

import ButtonDefault from './ButtonDefault';

describe('Default Button component', () => {
	test('matches the snapshot', () => {
		const button = create(<ButtonDefault />);
		expect(button.toJSON()).toMatchSnapshot();
	});
});
