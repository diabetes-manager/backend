const express = require('express');

const server = express();

server.use(express.json());

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
            "greeting": "Hello!"
        }...
    ]
*/

server.get('/', function (req, res) {
    res.status(200).json({ greeting:'Hello!' });
    // res.status(200).send('hello');
});
  

module.exports = server

