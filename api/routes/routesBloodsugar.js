const express = require('express');

const db = require('../../knexConfig.js');

const server = express.Router();







/**
 * @api {get} /api/bloodsugar/:id    GET /api/bloodsugar/{id}
 * @apiVersion 1.0.0
 * @apiName Get Bloodsugar by User
 * @apiGroup Bloodsugar
 *
 * @apiExample Request
 * axios.get('/api/bloodsugar/{id}');
 *
 * @apiSuccess {id} id            User Id
 * @apiSuccess {timestamp} timestamp            Timestamp for reading
 * @apiSuccess {number} value            Bloodsugar value
 * @apiSuccess {boolean} below_threshold            Below threshold true or false
 * @apiSuccess {number} prediction            Bloodsugar prediction
 * @apiSuccess {number} user_id            User id
 * 
 * @apiSuccessExample {json} Response
 *  [
 *      {
            "id": 1,
            "timestamp": "2019-02-01T03:12:07Z",
            "value": 109,
            "below_threshold": null,
            "prediction": null,
            "user_id": 1
        }...
    ]
*
*
*/

server.get('/:id', async (req, res) => {
    try {
        const userById = await db('users').where({ id:req.params.id }).first();
        const bloodsugar = await db('bloodsugar').where({ user_id:req.params.id })
        if (userById.length === 0) {  
            res.status(404).json({ message:"The user with the specified ID does not exist." });
        } else {
            res.status(200).json(bloodsugar);
        }
    } catch (error) {
        res.status(500).json({ message:"Cannot retrieve the users bloodsugar ", error:error });
    }
});



/**
 * @api {post} /api/bloodsugar    POST /api/bloodsugar
 * @apiVersion 1.0.0
 * @apiName Post Bloodsugar
 * @apiGroup Bloodsugar
 *
 * @apiExample Request
 * axios.post('/api/bloodsugar');
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

