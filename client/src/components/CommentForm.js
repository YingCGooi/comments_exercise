import React, { Component } from 'react'

class CommentForm extends Component {
  state = {
    fields: {
      author: '',
      body: ''
    }
  };

  handleFieldChange = (e) => {
    this.setState({
      fields: Object.assign({}, this.state.fields, {
        [e.target.name]: e.target.value
      })
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.fields);
    this.setState({fields: {author: '', body: ''}})
  };

  render() {
    return (
        <form action="" onSubmit={this.handleSubmit}>
          <h2>Post a Comment</h2>
          <div className="input-group">
            <label>Your Name</label>
            <input
              type="text"
              name="author"
              value={this.state.fields.author}
              onChange={this.handleFieldChange}
            />
          </div>

          <div className="input-group">
            <label>Your Comment</label>
            <textarea
              name="body"
              value={this.state.fields.body}
              cols="30"
              rows="10"
              onChange={this.handleFieldChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
    );
  }
}

export default CommentForm
