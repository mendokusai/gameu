console.log('just kidding');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);
