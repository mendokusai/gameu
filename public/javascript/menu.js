console.log('react files');
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className='commentBox'>
        Hellow form CommentBox!
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);