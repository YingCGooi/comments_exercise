import React, { Component } from 'react'
import ParentCommentContainer from './ParentCommentContainer.js'

class CommentList extends Component {
  render() {
    const ParentCommentContainerList = this.props.comments.map((comment) => {
      return <ParentCommentContainer
                comment={comment}
                key={comment.id}
                showReplies={this.props.showReplies}
              />
    });
    return (
      <div className="comments">
        <h2>Comments ({this.props.comments.length})</h2>
        {ParentCommentContainerList}
      </div>
    );
  }
}

export default CommentList
