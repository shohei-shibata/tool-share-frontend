import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ButtonDefault from './Default';

describe('Default Button component', () => {
	afterEach(cleanup);


	const handleClick = jest.fn();
	const props = {
		'data-testid': 'default-button',
		value: 'value',
		onClick: handleClick()
	};
	const { getByTestId } = render(<ButtonDefault {...props} />);
	const node = getByTestId(props['data-testid']);
	it('renders without throwing error', () => {
		render(<ButtonDefault />);
	});
	it('accepts a value prop and applies it as its text', () => {
		expect(node.value).toBe(props.value);
	});
	it('fires an onClick even when clicked', () => {
		fireEvent.click(node);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
