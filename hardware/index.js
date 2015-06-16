var five = require("johnny-five"),
    SeatSensor = require("./modules/SeatSensor");

module.exports = function(sockets) {

	var board = new five.Board({
	    	repl: false
	    }),

		lamp,
		powerLed,
	    sensor1,
	    sensor2;

	board.on("ready", function() {

		lamp = new five.Relay(5);

		powerLed = new five.Led(3);

		sensor1 = new SeatSensor('A0', 10, 500, 1000);
		sensor2 = new SeatSensor('A1', 10, 500, 1000);

		setInterval(function() {
			sensor1.update();
			sensor2.update();
		}, 500)

		sensor1.on('sitting', function() {
			if (sensor2.isSitting) {
				lamp.on();
			}
			sockets.onSit(1);
			console.log('sensor1: sitting');
		});

		sensor1.on('leaving', function() {
			lamp.off();
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
			console.log('sensor2: leaving');
		});

	});

}
