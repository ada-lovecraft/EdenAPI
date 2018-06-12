const express = require('express');
const fs = require('fs');
const router = express.Router();
const MODEL = require('../models/Mock.js');

let data;
fs.readFile('./API/data/mocks.json', (error, received) => {
    if(error) throw error;
    data = JSON.parse(received)
});


router.get('/', (request, response, next) => 
{
    response.status(200).json(
    {
        message : "I got your GET request for Mock objects man. I just didn't have any argument with it, man. I didn't get you anything then, man."
    });
});

router.get('/all', (request, response, next) => 
{
    response.json(
    {
        message : "Here are your Mock objects, man",
        data : data
    }); 
});

router.get('/:mockID', (request, response, next) => 
{
    const id = request.params.entityID;

    response.status(200);
    response.json(
    {
        message : id
    });
});

router.post('/', (request, response, next) => 
{
    response.status(200);
    response.json(
    {
        message : "POST request for entity successfully sent."
    });
});

module.exports = router;