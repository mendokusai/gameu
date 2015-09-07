// // Effort to make a command-line js game.
//
// console.time('Timer')
// console.log('Hello')
// var name = readline("What's your name? ").
//            toString();
// // var response = confirm('Type this')
// // console.log(response)
// console.timeEnd('Timer') //prints the results of Timer
// console.log('Hello, ' + name)

var express = require('express'),
    path    = require('path'),
    app     = express(),
    server  = require('http').createServer(app),
    io      = require('socket.io').listen(server);
    router  = express.Router();

var env = process.env.NODE_ENV || 'development';

if('development' == env) {
  app.use(express.static(__dirname + '/public'));
};

server.listen(process.env.PORT || 3001);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// connection
io.on('connection', function(socket) {
  var connection_msg = 'welcome';
  cosnole.time('PingTimer');
  io.emit('ping', connection_msg);

  // socket actions
  socket.on('start', function(data) {
    console.log('Start Data:', data);
  });
  
  socket.on('game', function(data) {
    if( data._player) {
      console.log('data: ', data.data);
    } else {
      console.log('data-', data);
    }
  });
});
