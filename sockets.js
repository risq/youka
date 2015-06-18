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
    seats[data.seat] = data.userId;
    io.emit('sitConfirmed', {
      seat: data.seat,
      userId: data.userId,
      full: isFull()
    });
  }
}

function onSit(seat) {
  if (seats[seat] === null) {
    io.emit('sitConfirm', {
      seat: seat
    });
  }
}

function onLeave(seat) {
  seats[seat] = null;
  io.emit('sitLeave', {
    seat: seat
  });
}

function isFull() {
  return (seats[1] !== null && seats[2] !== null);
}

function debugSeat(req, res) {
  console.log('DEBUG - SEAT', req.params.id);
  onSit(req.params.id);
  res.json({ 
    status: 'ok',
    seat: req.params.id
  });
}

function debugSeatLeave(req, res) {
  console.log('DEBUG - LEAVE SEAT', req.params.id);
  onLeave(req.params.id);
  res.json({ 
    status: 'ok',
    seat: req.params.id
  });
}

module.exports = function(server) {

  init(server);

  return {
    onSit: onSit,
    onLeave: onLeave,
    debugSeat: debugSeat,
    debugSeatLeave: debugSeatLeave
  }

};
