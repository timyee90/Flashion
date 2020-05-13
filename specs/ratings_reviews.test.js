import React from 'react';
// import renderer from 'react-test-renderer';
import Ratings from '../client/components/Ratings';
import { shallow } from 'enzyme';

//init testing suite, to be looked into tomorrow

describe('Ratings component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Ratings />);
    expect(wrapper).toMatchSnapshot();
  });
});
