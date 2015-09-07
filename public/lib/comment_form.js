'use strict';

var CommentForm = React.createClass({
  displayName: 'CommentForm',

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({ author: author, text: text });
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function render() {
    return React.createElement(
      'form',
      { className: 'commentForm', onSubmit: this.handleSubmit },
      React.createElement('input', { type: 'text', placeholder: 'Your name', ref: 'author' }),
      React.createElement('input', { type: 'text', placeholder: 'Comments?', ref: 'text' }),
      React.createElement('input', { type: 'submit', value: 'Post' })
    );
  }
});