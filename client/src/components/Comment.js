import React, { Component } from 'react';
import moment from 'moment';

class Comment extends Component {
  render() {
    const { id, author, postedAt, body } = this.props;
    return (
      <div className="comment" id={id}>
        <hr />
        <div className="image">
          <img src="/images/no-user-image.gif" alt=""/>
        </div>
        <div className="header">
          <h3 className="author">{author}</h3>
          <span>{ moment(postedAt).fromNow() }</span>
        </div>
        <p>{body}</p>
      </div>
    );
  }
}

export default Comment
