var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Quote = require('../models/quote');
var Todo = require('../models/todo');
var Bear = require('../models/bear');

router.use(function(req, res, next) {
  // do logging
  console.log('API Request is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {

   res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/quotes', function(req, res) {

  // use mongoose to get all todos in the database
  Quote.find(function(err, quotes) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err)

    res.json(quotes); // return all quotes in JSON format
  });
});

  // create quote and send back all quotes after creation
router.post('/quotes', function(req, res) {

    // create a quote, information comes from AJAX request from Angular
    Quote.create({
      name : req.body.name,
      author : req.body.author,
      quote : req.body.quote,
      done : false
    }, function(err, quote) {
      if (err)
        res.send(err);

      // get and return all the quotes after you create another
      Quote.find(function(err, quotes) {
        if (err)
          res.send(err)
        res.json(quotes);
      });
    });

});

// delete a quote
router.delete('/quotes/:quote_id', function(req, res) {
    Quote.remove({
      _id : req.params.quote_id
    }, function(err, quote) {
      if (err)
        res.send(err);

      // get and return all the quotes after you create another
      Quote.find(function(err, quotes) {
        if (err)
          res.send(err)
        res.json(quotes);
      });
    });
});

router.get('/todos', function(req, res) {

    // use mongoose to get all todos in the database
    Todo.find(function(err, todos) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err)

      res.json(todos); // return all todos in JSON format
    });
  });

  // create todo and send back all todos after creation
router.post('/todos', function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    Todo.create({
      text : req.body.text,
      done : false
    }, function(err, todo) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });

});

// delete a todo
router.delete('/todos/:todo_id', function(req, res) {
    Todo.remove({
      _id : req.params.todo_id
    }, function(err, todo) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });
});

router.post('/test', function(req, res){
  var bear = new Bear();
  bear.name = req.body.name;

  bear.save(function(err) {
    if (err)
      res.send(err);

    Bear.find(function(err, bears) {
      if (err)
        res.send(err);

      res.json(bears);
    });
  });
});

router.post('/bears', function(req, res){
  var bear = new Bear();
  bear.name = req.body.text;

  bear.save(function(err) {
    if (err)
      res.send(err);

    Bear.find(function(err, bears) {
      if (err)
        res.send(err);

      res.json(bears);
    });
  });
});

router.get('/bears', function(req, res) {
  Bear.find(function(err, bears) {
    if (err)
      res.send(err);

    res.json(bears);
  });
});

router.get('/bears/:bear_id', function(req, res) {
  Bear.findById(req.params.bear_id, function(err, bear) {
    if (err)
      res.send(err);

    res.json(bear);
  });
});

router.delete('/bears/:bear_id', function(req, res) {
    Bear.remove({
      _id : req.params.bear_id
    }, function(err, bear) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      Bear.find(function(err, bears) {
        if (err)
          res.send(err)
        res.json(bears);
      });
    });
});

router.put('/bears/:bear_id', function(req, res) {

    // use our bear model to find the bear we want
    Bear.findById(req.params.bear_id, function(err, bear) {

      if (err)
        res.send(err);

      bear.name = req.body.text;  // update the bears info

      // save the bear
      bear.save(function(err) {
        if (err)
          res.send(err);

        res.json(bear);
      });

    });
  });


module.exports = router;