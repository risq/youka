'use strict';

var socket = require('socket.io'),
    hardware,
    io,
    clients = [],
    seats = {
      1: null,
      2: null
    };

function init(server, hardwareInterface) {
  io = socket(server);

  hardware = hardwareInterface || null;

  io.on('connection', function (socket) {
    socket.on('confirmSit', onClientConfirm);
  });
}

function onClientConfirm(data) {
  console.log('onClientConfirm', data);
  if (seats[data.seat] === null && data.userId) {
    var peerId = seats[1] || seats[2];
    seats[data.seat] = data.userId;
    io.emit('sitConfirmed', {
      seat: data.seat,
      userId: data.userId,
      full: isFull(),
      peerId: peerId
    });
    if (isFull() && hardware) {
      hardware.pumpOn();
    }
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
  if (hardware) {
      hardware.pumpOff();
    }
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

function debugPump(req, res) {
  console.log('DEBUG - PUMP');
  if (hardware) {
    hardware.pumpOn();
    setTimeout(function() {
      hardware.pumpOff();
    }, 5000);
    res.json({ 
      status: 'ok',
    });
  } else {
    res.json({ 
      status: 'no hardware',
    });
  }
}

module.exports = function(server, hardware) {

  init(server, hardware);

  return {
    onSit: onSit,
    onLeave: onLeave,
    debugSeat: debugSeat,
    debugSeatLeave: debugSeatLeave,
    debugPump: debugPump
  }

};
