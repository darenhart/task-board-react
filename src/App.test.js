import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('renders title', () => {
  const component = shallow(<App />);
  const title = component.find('header');
  expect(title).toHaveLength(1);
});
