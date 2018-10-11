import React, { Component } from 'react'
import Comment from './Comment.js';
import store from '../store';

class ReplyList extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const commentId = this.props.comment_id;

    fetch(`/api/comment_replies?comment_id=${commentId}`)
      .then((response) => response.json())
      .then((replies) => {
        // const updatedComments = this.state.comments.map(comment => {
        //   if (comment.id === commentId) {
        //     return Object.assign({}, comment, {
        //       replies: comment.replies.concat(replies)
        //     });
        //   } else {
        //     return comment;
        //   }
        // });

        store.dispatch({type: 'REPLIES_RECEIVED', replies, commentId})
    });
  };

  render() {
    const replies = this.props.replies.map(reply => (
      <Comment
        key={reply.id}
        { ...reply}
      />
    ))
    const buttonVisable = this.props.replies.length < this.props.repliesCount;

    return (
      <div className="replies">
        {replies}
        {buttonVisable ?
        <a href="#"
           className={`show_more`}
           onClick={this.handleClick}
        >
          Show More Replies ({this.props.repliesCount - 1})
        </a> : ''}
      </div>
    );
  }
}

export default ReplyList
