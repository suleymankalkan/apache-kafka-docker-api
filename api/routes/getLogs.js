const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const LogSchema = require('../models/logSchema');

/* GET logs from mongodb. */
router.get('/', function(req, res, next) {
    const oneHourBefore = Date.now() - (3600 * 1000);
    LogSchema.find({timeStamp : { $gte : oneHourBefore }}).sort({timeStamp: -1}).exec((err, data) => { 
        res.send(data);    
    });
    console.log("Current time:", Date.now())
});

module.exports = router;