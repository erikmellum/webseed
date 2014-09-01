var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Quote = require('../models/quote');

router.get('/', function(req, res) {

    // use mongoose to get all todos in the database
    Quote.find(function(err, quotes) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err)

      res.json(quotes); // return all quotes in JSON format
    });
  });

  // create quote and send back all quotes after creation
router.post('/', function(req, res) {

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
router.delete('/:quote_id', function(req, res) {
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

module.exports = router;