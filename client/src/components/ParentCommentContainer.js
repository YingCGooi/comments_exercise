import React, { Component } from 'react';
import Comment from './Comment.js';
import ReplyList from './ReplyList.js';
import PropTypes from 'prop-types';
import ParentComment from './ParentComment';

class ParentCommentContainer extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  render() {
    const {store} = this.context;
    const commentId = this.props.comment.id;

    const replies = store.getState().replies.filter((reply) => {
      return commentId === reply.comment_id;
    });

    return (
      <ParentComment comment={this.props.comment} replies={replies}/>
    );
  }
}

export default ParentCommentContainer;
