const express = require('express');

const server = express.Router();

/**
 * @api {get} /api      GET /api
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup Root
 *
 * @apiExample Request Structure
 * axios.get('/api');
 *
 * @apiSuccess {String} message            Hello!
 * @apiSuccessExample {json} Example:
 *  [
 *      {
            "message": "Hello!"
        }...
    ]
*
*
*/

module.exports = server.get('/api', async (req, res) => {
    res.status(200).json({ message:"Hello!" })
})


