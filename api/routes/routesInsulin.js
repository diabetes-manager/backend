const express = require('express');

const db = require('../../knexConfig.js');

const server = express.Router();



/**
 * @api {post} /api/insulin    POST /api/insulin
 * @apiVersion 1.0.0
 * @apiName Post Insulin
 * @apiGroup Insulin
 *
 * @apiExample Request
 * axios.post('/api/insulin');
 * 
 * @apiSuccess {timestamp} timestamp            Timestamp (default)
 * @apiSuccess {number} user_id            ID of user insulin data is associated with (required)
 * @apiSuccess {number} amount            Insulin amount (required)
 * @apiSuccess {string} type            Insulin type (required)
 * @apiSuccess {string} brand            Insulin brand (required)
 * 
 * @apiSuccess {integer} duration            Insulin duration (optional)
 * 
 * @apiSuccessExample {json} Response
 *      HTTP/1.1 201
 *  {
        "message":"Thank you, insulin data has been added" 
    }
 * @apiError UsernameNotExists     User must exist, first, before adding insulin data
 * @apiErrorExample Response
 *      HTTP/1.1 400
 *      {
 *          "message":"User does not exist"
 *      }
*/

server.post('/', async (req, res) => {
    if(!req.body.user_id || !req.body.amount || !req.body.type || !req.body.brand) {
        return res.status(400).json({ message:"Please include user_id, amount, type, and brand" })
    }
    try {
        const checkUserExists = await db('users').where({ id:req.body.user_id }).first();
        if(!checkUserExists) {
            return res.status(400).json({ message:"User does not exist" })
        }
        const [id] = await db('insulin').insert(req.body)
        res.status(201).json({ message:"Thank you, insulin data has been added" });
    } catch (error) {
        res.status(500).json({ message:"Cannot add the insulin data", error:error });
    }
});




module.exports = server;

