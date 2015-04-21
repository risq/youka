var five = require("johnny-five"),
    board = new five.Board(),

	lamp,
    lcd,

    lampOn = false,
    counter = 0; 

board.on("ready", function() {

	lamp = new five.Relay(5);

	lcd = new five.LCD({ 
		pins: [2, 3, 9, 10, 11, 12]
  	});

	initLcd();
	
	setInterval(tick, 200);

});

function tick() {

	counter++;

	if (counter > 14) {

		counter = 0;
		
		if (lampOn) {
			lampOn = false;
			lamp.off();
		} else {
			lampOn = true;
			lamp.on();
		}

		initLcd();

	} else {

		lcd.cursor(1, counter)
	   	   .print('=');

	}
}

function initLcd() {

	lcd.clear()
	   .print('Lamp is ' + (lampOn ? 'ON' : 'OFF'))
	   .cursor(1, 0)
	   .print('[')
	   .cursor(1,15)
	   .print(']');

}