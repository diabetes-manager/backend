const express = require('express');

const db = require('../../knexConfig.js');

const server = express.Router();




/**
 * @api {delete} /api/insulin/:id    DELETE /api/insulin/:id
 * @apiVersion 1.0.0
 * @apiName Remove Insulin by User
 * @apiGroup Insulin
 *
 * @apiExample Request
 * axios.delete('/api/insulin/{id}');
 *
 * @apiSuccess {id} id            User Id deleted
 * @apiSuccessExample {json} Response
 *      HTTP/1.1 200
 *  {
        "message":"{1}, user has been deleted"
    }
 * @apiError UsernameNotExists     Username must exist to delete
 * @apiErrorExample Response
 *      HTTP/1.1 400
 *      {
 *          "message":"Sorry, user does not exist"
 *      }
*/

server.delete('/:id', async (req, res) => {
    if(!req.body.insulin_id) return res.status(400).json({ message:"insulin_id in body is required" })
    const checkUserExists = await db('users').where({ id:req.params.id }).first()
    const checkInsulinExists = await db('insulin').where({ id:req.body.insulin_id }).first()
    if(!checkUserExists) return res.status(404).json({ message:"Sorry, user does not exist" })
    if(!checkInsulinExists) return res.status(404).json({ message:`Sorry, insulin id# ${req.body.insulin_id} does not exist` })

    try {
        const insulinDelete = await db('insulin').where('id',req.body.insulin_id).del()
        if (insulinDelete > 1) {
            res.status(200).json({ message:`${insulinDelete} insulin records have been deleted` })
        } else {
            res.status(200).json({ message:`Insulin record ID# ${req.body.insulin_id} has been deleted` })
        }
    }
    catch (error) {
        res.status(500).json({ message:"Something went wrong deleting user!", error:error })
    }

});



/**
 * @api {get} /api/insulin/:id    GET /api/insulin/{id}
 * @apiVersion 1.0.0
 * @apiName Get insulin by User
 * @apiGroup Insulin
 *
 * @apiExample Request
 * axios.get('/api/insulin/{id}');
 *
 * @apiSuccess {id} id            User Id
 * @apiSuccess {timestamp} timestamp            Timestamp for reading
 * @apiSuccess {number} amount            Insulin amount
 * @apiSuccess {number} duration            Insulin duration
 * @apiSuccess {string} type            Insulin type
 * @apiSuccess {string} brand            Insulin brand
 * @apiSuccess {number} user_id            User id
 * 
 * @apiSuccessExample {json} Response
 *  [
 *      {
            "id": 1,
            "timestamp": "2019-02-01T03:21:53Z",
            "amount": 15,
            "duration": null,
            "type": "slow acting",
            "brand": "Humalog",
            "user_id": 1
        }...
    ]
*
*
*/

server.get('/:id', async (req, res) => {
    try {
        const userById = await db('users').where({ id:req.params.id }).first();
        const insulin = await db('insulin').where({ user_id:req.params.id })
        if (userById.length === 0) {  
            res.status(404).json({ message:"The user with the specified ID does not exist." });
        } else {
            res.status(200).json(insulin);
        }
    } catch (error) {
        res.status(500).json({ message:"Cannot retrieve the users insulin ", error:error });
    }
});




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

