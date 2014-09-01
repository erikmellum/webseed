var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bear = require('../models/bear');

router.post('/', function(req, res){
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

router.get('/', function(req, res) {
  Bear.find(function(err, bears) {
    if (err)
      res.send(err);

    res.json(bears);
  });
});

router.get('/:bear_id', function(req, res) {
  Bear.findById(req.params.bear_id, function(err, bear) {
    if (err)
      res.send(err);

    res.json(bear);
  });
});

router.delete('/:bear_id', function(req, res) {
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

router.put('/:bear_id', function(req, res) {

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