var five = require("johnny-five"),
    SeatSensor = require("./modules/SeatSensor");

module.exports = function(sockets) {

	var board = new five.Board({
	    	repl: false
	    }),

		ready = false,
		lamp,
		pump,
		powerLed,
	    sensor1,
	    sensor2;

	board.on('ready', function() {

		ready = true;

		lamp = new five.Relay(5);
		pump = new five.Relay(6);

		powerLed = new five.Led(3);

		sensor1 = new SeatSensor('A0', 15, 500, 1200);
		sensor2 = new SeatSensor('A1', 20, 500, 1200);

		setInterval(function() {
			sensor1.update();
			sensor2.update();
		}, 600)

		sensor1.on('sitting', function() {
			if (sensor2.isSitting) {
				lamp.on();
			}
			sockets.onSit(1);
			console.log('sensor1: sitting');
		});

		sensor1.on('leaving', function() {
			lamp.off();
			sockets.onLeave(1);
			console.log('sensor1: leaving');
		});

		sensor2.on('sitting', function() {
			sockets.onSit(2);
			if (sensor1.isSitting) {
				lamp.on();
			}
			console.log('sensor2: sitting');
		});

		sensor2.on('leaving', function() {
			lamp.off();
			sockets.onLeave(2);
			console.log('sensor2: leaving');
		});

	});

	return {
		pumpOn: function() {
			if (ready) {
				console.log('turning pump on');
				pump.on();
			}
		},
		pumpOff: function() {
			if (ready) {
				console.log('turning pump off');
				pump.off();
			}
		},
		lampOn: function() {
			if (ready) {
				console.log('turning lamp on');
				lamp.on();
			}
		},
		lampOff: function() {
			if (ready) {
				console.log('turning lamp off');
				lamp.off();
			}
		},
	}

}
