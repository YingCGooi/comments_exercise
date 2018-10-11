const rootReducer = (state = {comments: []}, action) => {
  return {
    comments: commentsReducer(state.comments, action),
    replies: repliesReducer(state.replies, action)
  }
}

const commentsReducer = (state = [], action) => {
  if (action.type === 'COMMENTS_RECEIVED') {
    const commentsWithoutReplies = action.comments.map((c) => {
      const {replies, ...commentWithoutReplies} = c;
      return commentWithoutReplies;
    });

    return state.concat(commentsWithoutReplies);
  } else {
    return state;
  }
}

const repliesReducer = (state = [], action) => {
  if (action.type === 'COMMENTS_RECEIVED') {
    const replies = action.comments.reduce((acc, comment) => {
      return acc.concat(comment.replies);
    }, []);

    return state.concat(replies);
  } else if(action.type === 'REPLIES_RECEIVED') {
      return state.concat(action.replies);
  } else {
    return state;
  }
}

export default rootReducer;
