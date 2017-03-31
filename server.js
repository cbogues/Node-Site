///////////////////////EXPRESS//////////////
//require dependencies
 // server.js
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//route for app
var router = require('./app/routes');
app.use('/', router);

// set static files (css, img) location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
  console.log('app started');
});

