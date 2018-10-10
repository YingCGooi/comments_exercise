import React, { Component } from 'react'
import Comment from './Comment.js'
import ReplyList from './ReplyList.js';
import {Link} from 'react-router-dom';

class ParentComment extends Component {
  render() {
    const { replies_count, replies, ...commentWithoutReplies } = this.props.comment;
    return (
      <div className="parent-comment">
        <Comment { ...commentWithoutReplies } />
        <Link to={`/comments/${this.props.comment.id}`}>
          Show Comment
        </Link>
        <ReplyList
          repliesCount={ replies_count}
          replies={ replies }
          showReplies={this.props.showReplies}
          comment_id={this.props.comment.id}
        />
      </div>
    );
  }
}

export default ParentComment
