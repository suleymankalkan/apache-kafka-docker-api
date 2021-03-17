const express = require('express');
const router = require('express').Router();
const getRandomIntInclusive = require('../helpers/getRandomIntInclusive');
/* 
The API Requirements
    It should return a successful reponse in 0-3 seconds (randomize the response time)
    It should log following information before the response.
        Log-> {METHOD}, {Response Time (ms)}, {timestamp}
*/

/* GET Method */
router.get('/', async(req, res) => {
let randomTime = await getRandomIntInclusive(0,3000);
await setTimeout((()=>{res.send(`başarılı -> ${randomTime}`)}), randomTime);
});

/* POST Method */
/* It should be able to accept empty request body*/
router.post('/', (req, res) => {
return 	
});

/* PUT Method */
/* It should be able to accept empty request body*/
router.put('/', (req, res) => {
return 	
});

/* DELETE Method */
router.delete('/', (req, res) => {
return 	
});

module.exports = router;