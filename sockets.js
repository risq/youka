'use strict';

var socket = require('socket.io'),
    io,
    clients = [],
    seats = {
      1: null,
      2: null
    };

function init(server) {
  io = socket(server);

  io.on('connection', function (socket) {
    socket.on('confirmSit', onClientConfirm);
  });
}

function onClientConfirm(data) {
  console.log('onClientConfirm', data);
  if (seats[data.seat] === null && data.userId) {
    io.emit('sitConfirmed', {
      seat: data.seat,
      userId: data.userId
    });
  }
}

function onSit(seat) {
  io.emit('sitConfirm', {
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
