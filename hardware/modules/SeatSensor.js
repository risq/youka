var five = require("johnny-five"),
	util = require("util"),
    eventEmitter = require('events').EventEmitter;


var SeatSensor = function (pin, forceThreshold, sitTimeThreshold, leaveTimeThreshold, log) {
	this.forceThreshold = forceThreshold;
	this.sitTimeThreshold  = sitTimeThreshold;
	this.leaveTimeThreshold  = leaveTimeThreshold;
	this.log = log;
	this.isSitting = false;
	this.sitStartTime = null;
	this.currentForce = 0;

    this.sensor = new five.Sensor({
		pin: pin,
		freq: 100
	});


	this.sensor.on('change', this.onChange.bind(this));
}

util.inherits(SeatSensor, eventEmitter);


var p = SeatSensor.prototype;

p.onChange = function(e, value) {
	this.currentForce = value * 0.0977517106549365; // = value * 100 / 1023
	this.emit('change', this.currentForce);
	this.update();
	if (this.log) {
		var text = '';
		for (var i = 0; i < this.currentForce; i++) {
			text += '|';
		}
		console.log(text + Math.round(this.currentForce) + '%');
	}
}

p.update = function() {
	if (!this.isSitting) {
		if (this.currentForce > this.forceThreshold) {
			if (!this.sitStartTime) {
				// console.log('Someone is sitting ?')
				this.sitStartTime = Date.now();
			} else {
				if(Date.now() - this.sitStartTime > this.sitTimeThreshold) {
					// console.log('Sitting !');
					this.sitStartTime = null;
					this.isSitting = true;
					this.emit('sitting');
				}
			}
		} else {
			this.sitStartTime = null;
		}
	} else {
		if (this.currentForce < this.forceThreshold) {
			if (!this.sitStartTime) {
				// console.log('Someone is leaving ?')
				this.sitStartTime = Date.now();
			} else {
				if(Date.now() - this.sitStartTime > this.leaveTimeThreshold) {
					// console.log('Leaving !');
					this.sitStartTime = null;
					this.isSitting = false;
					this.emit('leaving');
				}
			}
		} else {
			this.sitStartTime = null;
		}
	}
}


module.exports = SeatSensor;