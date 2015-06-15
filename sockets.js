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

function onSit() {
  io.emit('sit');
}

module.exports = function(server) {

  init(server);

  return {
    onSit: onSit
  }

};
