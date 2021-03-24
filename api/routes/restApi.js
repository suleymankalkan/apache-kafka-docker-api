const express = require('express');
const router = require('express').Router();
const requestLogger = require('../logger/middleware');
/* 
The API Requirements
    It should return a successful reponse in 0-3 seconds (randomize the response time)
    It should log following information before the response.
        Log-> {METHOD}, {Response Time (ms)}, {timestamp}
*/

/* GET Method */
router.get('/', requestLogger, async(req, res) => {
    setTimeout((()=>{res.json(req.log)}), req.log.responseTime);
});

/* POST Method */
/* It should be able to accept empty request body*/
router.post('/', requestLogger,  async(req, res) => {
    setTimeout((()=>{res.json(req.log)}), req.log.responseTime);
});

/* PUT Method */
/* It should be able to accept empty request body*/
router.put('/', async(req, res) => {
    let responseTime = await getRandomIntInclusive(0,3000);
    let timeStamp = moment().format();
    let logRes = {
        "statusCode" : "200",
        "methodType" : "PUT",
        "responseTime" : responseTime,
        "timeStamp" : timeStamp
    };
    if(!(Object.keys(req.body).length === 0 && req.body.constructor === Object))
        logRes["reqBody"] = req.body;
    await logger.log({
        level: 'info',
        message: `${logRes.methodType},${logRes.responseTime},${logRes.timeStamp}`
      });
    await setTimeout((()=>{res.json(logRes)}), responseTime);
});

/* DELETE Method */
router.delete('/', async(req, res) => {
    let responseTime = await getRandomIntInclusive(0,3000);
    let timeStamp = moment().format();
    let logRes = {
        "statusCode" : "200",
        "methodType" : "DELETE",
        "responseTime" : responseTime,
        "timeStamp" : timeStamp
    };
    await logger.log({
        level: 'info',
        message: `${logRes.methodType},${logRes.responseTime},${logRes.timeStamp}`
      });
    await setTimeout((()=>{res.json(logRes)}), responseTime);
});

module.exports = router;