///////////////////////EXPRESS//////////////
//require dependencies
 // server.js
var express = require('express');
var app = express();
var port = 8080;

//route for app
var router = require('./app/routes');
app.use('/', router);

// set static files (css, img) location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
  console.log('app started');
});

