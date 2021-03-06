const getRandomIntInclusive = require('../helpers/getRandomIntInclusive');
const moment = require('moment');
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      // - Write all logs with level `info` and below to `api.log`
      new winston.transports.File({ filename: 'api.log' }),
    ],
  });

const requestLogger = async (req, res, next) => {
    let responseTime = getRandomIntInclusive(0,3000);
    let timeStamp = moment().unix();
    let logRes = {
        "statusCode" : "200",
        "methodType" : req.method,
        "responseTime" : responseTime,
        "timeStamp" : timeStamp
    };
    if(!(Object.keys(req.body).length === 0 && req.body.constructor === Object)) // check if we have an non-empty request body
        logRes["reqBody"] = req.body; // if we have it, add it to the response
    logger.log({
        level: 'info',
        message: `${logRes.methodType},${logRes.responseTime},${logRes.timeStamp}`
      });
    req.log = logRes;
    return next();
}


module.exports = requestLogger;