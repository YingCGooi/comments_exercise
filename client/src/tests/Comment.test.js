import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Comment from '../components/Comment';

describe('Comment', () => {
  let comment =  {
    id: "7c4ad745-4171-4ca8-bca0-54f083aba32d",
    author: "Louisa Leuschke",
    body: "Odit eligendi quasi deleniti ipsa cumque iusto ullam.",
    postedAt: 1532722744454,
  };

  it('renders an H3 element with the Authors name', () => {
    const wrapper = shallow(<Comment {...comment}/>);
    expect(wrapper.find('h3').text()).toEqual(comment.author);
  });

  it('renders an image tag', () => {
    const wrapper = shallow(<Comment {...comment}/>);
    expect(wrapper.containsMatchingElement(
      <img />
    )).toBe(true);
  });
});
