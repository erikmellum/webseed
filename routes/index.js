var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var Quote = require('../models/user');
require('../config/passport');

router.get('/todo', function(req, res) {
  res.render('partials/todo', { title: 'ToDo' });
});

router.get('/other', function(req, res) {
  res.render('partials/other', { title: 'Other' });
});

router.get('/home', function(req, res) {
  res.render('partials/home', { title: 'Home' });
});

router.get('/about', function(req, res) {
  res.render('partials/about', { title: 'About' });
});

router.get('/bear', function(req, res) {
  res.render('partials/bear', { title: 'Bear' });
});

router.get('/quote', function(req, res) {
  res.render('partials/quote', { title: 'Quote' });
});
router.get('/user', function(req, res) {
  res.render('partials/user'); 
});

router.get('/login', function(req, res) {
  res.render('partials/login', { message: req.flash('loginMessage') }); 
});

router.get('/signup', function(req, res) {
  res.render('partials/signup', { message: req.flash('signupMessage') });
});

router.get('/profile', isLoggedIn, function(req, res) {
  res.render('partials/profile', {
    user : req.user
  });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/#/profile', // redirect to the secure profile section
  failureRedirect : '/#/signup', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/#/profile', // redirect to the secure profile section
  failureRedirect : '/#/login', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/#/',  {message: 'Please login before visiting profile page!'});
};

router.get('/', function(req, res) {
  res.render('index', { title: 'Index' });
});

module.exports = router;
