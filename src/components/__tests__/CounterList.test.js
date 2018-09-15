import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CounterList from '../CounterList';

describe('CounterList component layout', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<CounterList />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  
  it('has add counter button', () => {
    const wrapper = shallow(<CounterList />);
    expect(wrapper.find('#add-counter').exists()).toEqual(true);
  })

  it('has remove counter button', () => {
    const wrapper = shallow(<CounterList />);
    expect(wrapper.find('#remove-counter').exists()).toEqual(true);
  })
  
  it('should render one counter by default', () => {
    const wrapper = shallow(<CounterList />);
    const counters = wrapper.find('Counter');
    
    expect(counters.length).toEqual(1);
  })
})

describe('CounterList component UI', () => {
  it('adds counter when add counter clicked', () => {
    const wrapper = shallow(<CounterList />);
    const button = wrapper.find('#add-counter');
    button.simulate('click');
    const counters = wrapper.find('Counter');

    expect(counters.length).toEqual(2);
  })

  it('removes counter when remove counter clicked', () => {
    const wrapper = shallow(<CounterList />);
    const button = wrapper.find('#remove-counter');
    button.simulate('click');
    const counters = wrapper.find('Counter');

    expect(counters.length).toEqual(0);
  })
})