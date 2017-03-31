//require express
var express = require('express');
var path = require('path');

//create the router object
var router = express.Router();

// export the router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
	res.render('pages/home');
});

//route  for about page
router.get('/about', function(req, res) {
	var users = [
		{ name: 'Chris', email: 'chris.bogues@gmail.com', avatar: 'http://placekitten.com/910/910'},
		{ name: 'Breck', email: 'breck.mahoney@gmail.com', avatar: 'http://placekitten.com/800/800'},
		{ name: 'Amir', email: 'ajjmazarei@gmail.com', avatar: 'http://placekitten.com/650/650'},
		{ name: 'Scott', email: 'scott.arceri@gmail.com', avatar: 'http://placekitten.com/700/700'}	
	];


	res.render('pages/about', { users: users });

});

//route  for contact page
router.get('/contact', function(req, res) {
	res.render('pages/contact');
});


router.post('/contact', function(req, res) {

});