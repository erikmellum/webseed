var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var quotes = require('./quotes');
var bears = require('./bears');
var todos = require('./todos');

router.use('/quotes', quotes);
router.use('/bears', bears);
router.use('/todos', todos);

router.use(function(req, res, next) {
  // do logging
  console.log('API Request is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {

   res.json({ message: 'hooray! welcome to our api!' });
});

module.exports = router;