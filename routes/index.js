var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Quote = require('../models/quote');
var Todo = mongoose.model('Todo', {
    text : String
});

router.get('/api/quotes', function(req, res) {

    // use mongoose to get all todos in the database
    Quote.find(function(err, quotes) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err)

      res.json(quotes); // return all quotes in JSON format
    });
  });

  // create quote and send back all quotes after creation
router.post('/api/quotes', function(req, res) {

    // create a quote, information comes from AJAX request from Angular
    Quote.create({
      name : req.body.text,
      author : req.body.text,
      quote : req.body.text,
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
router.delete('/api/quotes/:quote_id', function(req, res) {
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

router.get('/api/todos', function(req, res) {

    // use mongoose to get all todos in the database
    Todo.find(function(err, todos) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err)

      res.json(todos); // return all todos in JSON format
    });
  });

  // create todo and send back all todos after creation
router.post('/api/todos', function(req, res) {

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
router.delete('/api/todos/:todo_id', function(req, res) {
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

router.get('/', function(req, res) {
  res.render('index', { title: 'Index' });
});

module.exports = router;
