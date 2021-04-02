const express = require('express');
const router = require('express').Router();
const requestLogger = require('../middleware/logger');
/* 
The API Requirements
    It should return a successful reponse in 0-3 seconds (randomize the response time)
    It should log following information before the response.
        Log-> {METHOD}, {Response Time (ms)}, {timestamp}
*/

/* GET Method */
router.get('/get', requestLogger, async(req, res) => {
    setTimeout((()=>{res.json(req.log)}), req.log.responseTime);
});

/* POST Method */
/* It should be able to accept empty request body*/
router.post('/post', requestLogger,  async(req, res) => {
    setTimeout((()=>{res.json(req.log)}), req.log.responseTime);
});

/* PUT Method */
/* It should be able to accept empty request body*/
router.put('/put', requestLogger, async(req, res) => {
    setTimeout((()=>{res.json(req.log)}), req.log.responseTime);
});

/* DELETE Method */
router.delete('/delete', requestLogger, async(req, res) => {
    setTimeout((()=>{res.json(req.log)}), req.log.responseTime);
});

module.exports = router;