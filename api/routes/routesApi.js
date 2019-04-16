const express = require('express');

// const db = require('../../knexConfig.js');

const server = express.Router();

/**
 * @api {get} /api /api
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


// GET base route, say hello
module.exports = server.get('/api', async (req, res) => {
    res.status(200).json({ message:"Hello!" })
})


