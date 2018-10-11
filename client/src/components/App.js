import React, { Component } from 'react';
import logo from '../logo.svg';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import store from '../store';
import {Provider} from 'react-redux';

class App extends Component {
  handleCommentSubmit = (commentFields) => {
    global.fetch(`/api/comments`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({comment: commentFields})
    }).then(response => response.json())
      .then(comment => this.setState({comments: this.state.comments.concat(comment)}));
  };

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });

    fetch('/api/comments')
      .then((response) => response.json())
      .then((comments) => {

        store.dispatch({ type: 'COMMENTS_RECEIVED', comments: comments });
        console.log(store.getState());
    });
  }

  render() {
    const comments = store.getState().comments;
    return (
      <Provider store={store}>
        <div className="App">
            <CommentList
              comments={comments}
              showReplies={this.showReplies}
            />
            <CommentForm onSubmit={this.handleCommentSubmit}/>
        </div>
      </Provider>
    );
  }
}

export default App;
