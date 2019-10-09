import React from 'react';
import { shallow } from 'enzyme';

import Input from './index.js'

describe('Input', () => {
	it('should render an input element', () => {
		const component  = shallow(<Input />);
		expect(component.getElements()).toMatchSnapshot();
	});
	it('should create an entry in component state', () => {
		const component = shallow(<Input />);
		const form = component.find('input');
		form.props().onChange({target: {
			name: 'someName',
			value: 'someValue'
		}});
		expect(component.state.input).toBeDefined();
	});
});
