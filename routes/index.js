var express = require('express');
var router = express.Router();

router.get('/other', function(req, res) {
  res.render('partials/other', { title: 'Other' });
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Index' });
});

router.get('/home', function(req, res) {
  res.render('partials/home', { title: 'Home' });
});

router.get('/about', function(req, res) {
  res.render('partials/about', { title: 'About' });
});

module.exports = router;
