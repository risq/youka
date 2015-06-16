'use strict';

var socket = require('socket.io'),
    io,
    clients = [];

function init(server) {
  io = socket(server);

  io.on('connection', function (socket) {
    socket.on('register', register);
  });
}

function register(data) {
  clients.push({
    socket: this,
    id: data.userId
  })
}

function onSit(seat) {
  io.emit('sit', {
    seat: seat
  });
}

function debugSeat(req, res) {
  console.log('DEBUG', req.params.id);
  onSit(req.params.id);
  res.json({ 
    status: 'ok',
    seat: req.params.id
  });
}

module.exports = function(server) {

  init(server);

  return {
    onSit: onSit,
    debugSeat: debugSeat
  }

};
