'use strict';

var socket = require('socket.io'),
    hardware,
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

function debugPumpOn(req, res) {
  console.log('DEBUG - PUMP ON');
  if (hardware) {
    hardware.pumpOn();
    res.json({ 
      status: 'ok',
    });
  } else {
    res.json({ 
      status: 'no hardware',
    });
  }
}

function debugPumpOff(req, res) {
  console.log('DEBUG - PUMP ON');
  if (hardware) {
    hardware.pumpOff();
    res.json({ 
      status: 'ok',
    });
  } else {
    res.json({ 
      status: 'no hardware',
    });
  }
}

function debugLampOn(req, res) {
  console.log('DEBUG - PUMP ON');
  if (hardware) {
    hardware.lampOn();
    res.json({ 
      status: 'ok',
    });
  } else {
    res.json({ 
      status: 'no hardware',
    });
  }
}

function debugLampOff(req, res) {
  console.log('DEBUG - PUMP ON');
  if (hardware) {
    hardware.lampOff();
    res.json({ 
      status: 'ok',
    });
  } else {
    res.json({ 
      status: 'no hardware',
    });
  }
}

function setHardwareInterface(hardwareInterface) {
  hardware = hardwareInterface;
}

module.exports = function(server) {

  init(server);

  return {
    onSit: onSit,
    onLeave: onLeave,
    debugSeat: debugSeat,
    debugSeatLeave: debugSeatLeave,
    debugLampOn: debugLampOn,
    debugLampOff: debugLampOff,
    debugPumpOn: debugPumpOn,
    debugPumpOff: debugPumpOff,
    setHardwareInterface: setHardwareInterface
  }

};
