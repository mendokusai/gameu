'use strict';

var CommentList = React.createClass({
  displayName: 'CommentList',

  render: function render() {
    var commentNodes = this.props.data.map(function (comment) {
      return React.createElement(
        Comment,
        { author: comment.author },
        comment.text
      );
    });
    return React.createElement(
      'div',
      { className: 'commentList' },
      commentNodes
    );
  }
});