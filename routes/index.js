var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Quote = require('../models/user');
var login = require('./login');
var users = require('./users');
var api = require('./api');


router.use('/', login)
router.use('/users', users);
router.use('/api', api);

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

router.get('/', function(req, res) {
  res.render('index', { title: 'Index' });
});

module.exports = router;
