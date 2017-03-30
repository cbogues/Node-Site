//require express
var express  = require('express');
var path  = require('path');

//create the router object
var router = express.Router();

// export the router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});

//route  for about page
router.get('/about', function(req, res) {
  res.send('hello world I am the about page!');
});

//route  for contact page
router.get('/contact');
router.post('/contact');