var five = require("johnny-five"),
    SeatSensor = require("./modules/SeatSensor"),


    board = new five.Board({
    	repl: false
    }),

	lamp,
	powerLed,
    lcd,
    sensor1,
    sensor2;

board.on("ready", function() {

	lamp = new five.Relay(5);

	powerLed = new five.Led(3);

	lcd = new five.LCD({ 
		pins: [2, 4, 9, 10, 11, 12]
  	});

  	lcd.print('Lamp is OFF');
  	lcd.cursor(1, 0).print('[');
  	lcd.cursor(1, 15).print(']');
	

	sensor1 = new SeatSensor('A0', 10, 500, 5000);
	sensor2 = new SeatSensor('A1', 10, 500, 5000);

	setInterval(function() {
		sensor1.update();

		// powerLed.brightness(sensor.currentForce * 255 / 100);

		// var bar = '',
		// 	lcdValue = Math.round(sensor.currentForce * 14 / 100);

		// for (var i = 0; i < 14; i++) {
		// 	bar += (i < lcdValue) ? '=' : ' ';
		// }

		// lcd.cursor(1, 1).print(bar);
		// 
	}, 500)

	sensor1.on('sitting', function() {
		lamp.on();
		console.log('sensor1: sitting');
	});

	sensor1.on('leaving', function() {
		lamp.off();
		console.log('sensor1: leaving');
	});

	sensor2.on('sitting', function() {
		lamp.on();
		console.log('sensor2: sitting');
	});

	sensor2.on('leaving', function() {
		lamp.off();
		console.log('sensor2: leaving');
	});

});
