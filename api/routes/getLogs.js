const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

/* GET logs from mongodb. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;