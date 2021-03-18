var express = require('express');
var router = express.Router();

/* GET Live Graphical Interface. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Live Graphical Interface' });
});

module.exports = router;
