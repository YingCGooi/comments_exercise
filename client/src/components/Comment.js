import React, { Component } from 'react';
import moment from 'moment';

class Comment extends Component {
  render() {
    return (
      <div className="comment" id={this.props.id}>
        <hr />
        <div className="image">
          <img src="/images/no-user-image.gif" alt=""/>
        </div>
        <div className="header">
          <h3 className="author">{this.props.author}</h3>
          <span>{ moment(props.postedAt).fromNow() }</span>
        </div>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Comment
