import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CommentForm from '../components/CommentForm';

describe('CommentForm', () => {
  it ('renders the name input field', () => {
    const wrapper = shallow(<CommentForm />)
    expect(
      wrapper.find('input[type="text"]').length
    ).toEqual(1)
  });

  it ('should populate user input when typed', () => {
    const wrapper = shallow(<CommentForm />)
    const input = wrapper.find('input[type="text"]')
    input.simulate('change', {
      target: { name: 'author', value: 'Hello' }
    });

    expect(
      wrapper.state().fields.author
    ).toEqual('Hello');
  });

  it ('should reset the state upon form submission', () => {
    const wrapper = shallow(<CommentForm onSubmit={Function.prototype}/>)
    const input = wrapper.find('input[type="text"]')
    input.simulate('change', {
      target: { name: 'author', value: 'Hello' }
    });

    const form = wrapper.find('form')
    form.simulate('submit', {
      preventDefault: Function.prototype
    })

    expect(
      wrapper.state().fields.author
    ).toEqual('');

    expect(
      wrapper.state().fields.body
    ).toEqual('');
  });

  it ('calls the onSubmit function when form is submitted', () => {
    const myFunc = jest.fn()
    const wrapper = shallow(<CommentForm onSubmit={myFunc}/>)
    const form = wrapper.find('form')
    form.simulate('submit', {
      preventDefault: Function.prototype
    })
    
    expect(
      myFunc.mock.calls[0].length
    ).toEqual(1);
  });
});