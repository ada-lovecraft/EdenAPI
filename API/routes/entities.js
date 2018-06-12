const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => 
{
    response.status(200).json(
    {
        message : "I got your GET request for Entities man. I just didn't have any argument with it, man. I didn't get you anything then, man."
    });
});
router.get('/all', (request, response, next) => 
{
    response.status(200).json(
    {
        message : "I got your GET request to view all Entities man. I just don't have any Entities yet, man."
    });
});
router.get('/:entityID', (request, response, next) => 
{
    const id = request.params.entityID == "000";
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