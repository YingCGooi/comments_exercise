import React, { Component } from 'react'
import Comment from './Comment.js'
import ReplyList from './ReplyList.js'

class ParentComment extends Component {
  render() {
    const { replies_count, replies, ...commentWithoutReplies } = this.props.comment;
    return (
      <div className="parent-comment">
        <Comment { ...commentWithoutReplies } />
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
