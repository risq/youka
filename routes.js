/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var config = require('./config/config.json')

module.exports = function(app, sockets) {



  app.use('/debug/seat/:id/leave', sockets.debugSeatLeave);
  app.use('/debug/seat/:id', sockets.debugSeat);
  app.use('/debug/pumpOn', sockets.debugPumpOn);
  app.use('/debug/pumpOff', sockets.debugPumpOff);
  app.use('/debug/lampOn', sockets.debugLampOn);
  app.use('/debug/lampOff', sockets.debugLampOff);
  
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/debug')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/debug.html');
    });
    
  app.route('/config.json')
    .get(function(req, res) {
      res.json(config);
    });


  app.route('/index.html')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });

};
