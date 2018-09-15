import React from 'react';
import {shallow} from 'enzyme';
import Counter from '../Counter';
import renderer from 'react-test-renderer';

describe('Counter component layout', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('has a click count print', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('#count').exists()).toEqual(true);
  })

  it('has an increment btn', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('#increment-btn').exists()).toEqual(true);
  })

  it('has a decrement btn', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('#decrement-btn').exists()).toEqual(true);
  })
})

describe('Counter component UI', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<Counter />);
    const text = wrapper.find('#count').text();

    expect(text).toEqual('CLICK COUNT: 0');
  })

  it('increments count when increment btn is clicked', () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find('#increment-btn');
    
    incrementBtn.simulate('click');
    const text = wrapper.find('#count').text();

    expect(text).toEqual('CLICK COUNT: 1');
  })

  it('decrements count when decrement btn is clicked', () => {
    const wrapper = shallow(<Counter />);
    const decrementBtn = wrapper.find('#decrement-btn');
    
    decrementBtn.simulate('click');
    const text = wrapper.find('#count').text();

    expect(text).toEqual('CLICK COUNT: -1');
  })
})