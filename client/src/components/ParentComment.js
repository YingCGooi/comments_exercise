import React from 'react';
import ReplyList from './ReplyList';
import Comment from './Comment';

const ParentComment = (props) => {
  const { replies_count, ...commentWithoutReplies } = props.comment;
  return (

    <div className="parent-comment">
      <Comment { ...commentWithoutReplies } />
      <ReplyList
        repliesCount={ replies_count}
        replies={ props.replies }
        showReplies={props.showReplies}
        comment_id={props.comment.id}
      />
    </div>
  );
}

export default ParentComment;
