import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

import {sum} from './math';

describe('First React component test with Enzyme', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
});

describe('Examining the syntax of Jest tests,', () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});
	it('sums numbers', () => {
	  expect(sum(1,2)).toEqual(3);
	});
});
