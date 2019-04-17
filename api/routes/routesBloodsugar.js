const express = require('express');

const db = require('../../knexConfig.js');

const server = express.Router();



/**
 * @api {post} /api/bloodsugar    POST /api/bloodsugar
 * @apiVersion 1.0.0
 * @apiName Post Bloodsugar
 * @apiGroup Bloodsugar
 *
 * @apiExample Request
 * axios.post('/api/bloodsugar');
 * 
 * 
 * @apiSuccess {number} user_id            ID of user bloodsugar data is associated with (required)
 * @apiSuccess {timestamp} timestamp            Timestamp (default)
 * @apiSuccess {number} value            Bloodsugar value (required)
 * @apiSuccess {boolean} below_threshold            Bloodsugar below threshold true or false (optional)
 * @apiSuccess {string} prediction            Bloodsugar prediction (optional)
 * 
 * @apiSuccessExample {json} Response
 *      HTTP/1.1 201
 *  {
        "message":"Thank you, bloodsugar data has been added" 
    }
 * @apiError UsernameNotExists     User must exist, first, before adding bloodsugar data
 * @apiErrorExample Response
 *      HTTP/1.1 400
 *      {
 *          "message":"User does not exist"
 *      }
*/

server.post('/', async (req, res) => {
    if(!req.body.user_id || !req.body.value) {
        return res.status(400).json({ message:"Please include user_id and value" })
    }
    try {
        const checkUserExists = await db('users').where({ id:req.body.user_id }).first();
        if(!checkUserExists) {
            return res.status(400).json({ message:"User does not exist" })
        }
        const [id] = await db('bloodsugar').insert(req.body)
        res.status(201).json({ message:"Thank you, bloodsugar data has been added" });
    } catch (error) {
        res.status(500).json({ message:"Cannot add the bloodsugar data", error:error });
    }
});




module.exports = server;

