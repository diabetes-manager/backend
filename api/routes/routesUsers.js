const express = require('express');

const db = require('../../knexConfig.js');

const server = express.Router();


/**
 * @api {get} /api/users GET /api/users
 * @apiVersion 1.0.0
 * @apiName Get Users
 * @apiGroup Users
 *
 * @apiExample Request
 * axios.get('/api/users');
 *
 * @apiSuccess {id} id            User Id
 * @apiSuccess {string} username            Username (required)
 * @apiSuccess {number} bg_high            User Bg_high (required)
 * @apiSuccess {number} bg_low            User Bg_low (required)
 * @apiSuccess {number} bg_target_top            User Bg_target_top (defaults to 7, subject to change)
 * @apiSuccess {number} bg_target_bottom            User Bg_target_bottom (defaults to 3, subject to change)
 * @apiSuccess {number} height            User height
 * @apiSuccess {number} weight            User weight
 * @apiSuccess {date} birthdate            User birthdate
 * @apiSuccess {date} diagnosis_date            User diagnosis_date
 * @apiSuccess {string} gender            User gender
 * @apiSuccess {string} diabetes_type            Diabetes type (usually 1 or 2)

 * @apiSuccessExample {json} Response
 *  [
 *      {
            "id": 1,
            "username": "Patient Zero",
            "bg_high": 7,
            "bg_low": 3,
            "bg_target_top": 7,
            "bg_target_bottom": 3,
            "height": null,
            "weight": null,
            "birthdate": null,
            "diagnosis_date": null,
            "gender": null,
            "diabetes_type": null,
        },
        {
            "id": 2,
            "username": "Patient One",
            "bg_high": 6,
            "bg_low": 4,
            "bg_target_top": 7,
            "bg_target_bottom": 3,
            "height": null,
            "weight": null,
            "birthdate": null,
            "diagnosis_date": null,
            "gender": null,
            "diabetes_type": null
        }
    ]
*
*
*/

server.get('/', async (req, res) => {
    try {
        const users = await db('users');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message:"Cannot retrieve the users", error:error });
    }
});



/**
 * @api {get} /api/users/:id    GET /api/users/{id}
 * @apiVersion 1.0.0
 * @apiName Get User
 * @apiGroup Users
 *
 * @apiExample Request
 * axios.get('/api/users/{id}');
 *
 * @apiSuccess {id} id            User Id
 * @apiSuccess {string} username            Username (required)
 * @apiSuccess {number} bg_high            User Bg_high (required)
 * @apiSuccess {number} bg_low            User Bg_low (required)
 * @apiSuccess {number} bg_target_top            User Bg_target_top (defaults to 7, subject to change)
 * @apiSuccess {number} bg_target_bottom            User Bg_target_bottom (defaults to 3, subject to change)
 * @apiSuccess {number} height            User height
 * @apiSuccess {number} weight            User weight
 * @apiSuccess {date} birthdate            User birthdate
 * @apiSuccess {date} diagnosis_date            User diagnosis_date
 * @apiSuccess {string} gender            User gender
 * @apiSuccess {string} diabetes_type            Diabetes type (usually 1 or 2)
 * 
 * @apiSuccessExample {json} Response
 *  [
 *      {
            "id": 1,
            "username": "Patient Zero",
            "bg_high": 7,
            "bg_low": 3,
            "bg_target_top": 7,
            "bg_target_bottom": 3,
            ...
        }
    ]
*
*
*/

server.get('/:id', async (req, res) => {
    try {
        const userById = await db('users').where({ id:req.params.id }).first();
        if (userById.length === 0) {  
            res.status(404).json({ message:"The user with the specified ID does not exist." });
        } else {
            res.status(200).json(userById);
        }
    } catch (error) {
        res.status(500).json({ message:"Cannot retrieve the user", error:error });
    }
});





/**
 * @api {get} /api/users/mobile/:id    GET /api/users/mobile/{id}
 * @apiVersion 1.0.0
 * @apiName Get User (mobile)
 * @apiGroup Users
 *
 * @apiExample Request
 * axios.get('/api/users/mobile/{id}');
 *
 * @apiSuccess {id} id            User Id
 * @apiSuccess {string} username            Username (required)
 * @apiSuccess {number} bg_high            User Bg_high (required)
 * @apiSuccess {number} bg_low            User Bg_low (required)
 * @apiSuccess {number} bg_target_top            User Bg_target_top (defaults to 7, subject to change)
 * @apiSuccess {number} bg_target_bottom            User Bg_target_bottom (defaults to 3, subject to change)
 * @apiSuccess {number} height            User height
 * @apiSuccess {number} weight            User weight
 * @apiSuccess {date} birthdate            User birthdate
 * @apiSuccess {date} diagnosis_date            User diagnosis_date
 * @apiSuccess {string} gender            User gender
 * @apiSuccess {string} diabetes_type            Diabetes type (usually 1 or 2)
 * @apiSuccess {string} insulin            Insulin data pertaining to user
 * @apiSuccess {string} bloodsugar            Bloodsugar data pertaining to user
 * 
 * @apiSuccessExample {json} Response
 *  [
 *      {
            "id": 1,
            "username": "Patient Zero",
            "bg_high": 7,
            "bg_low": 3,
            "bg_target_top": 7,
            "bg_target_bottom": 3,
            "height": null,
            "weight": null,
            "birthdate": null,
            "diagnosis_date": null,
            "gender": null,
            "diabetes_type": null,
            "insulin": {
                "id": 1,
                "timestamp": "2019-02-01T03:10:45Z",
                "amount": 17,
                "duration": null,
                "type": "pill form",
                "brand": "Novolog",
                "user_id": 1
            }...,
            "bloodsugar": {
                "id": 1,
                "timestamp": "2019-02-01T03:21:53Z",
                "amount": 15,
                "duration": null,
                "type": "slow acting",
                "brand": "Humalog",
                "user_id": 1
            }...
        }
    ]
*
*
*/

server.get('/mobile/:id', async (req, res) => {
    try {
        const userById = await db('users').where({ id:req.params.id }).first();
        const insulinById = await db('insulin').where({ user_id:req.params.id });
        const bloodsugarById = await db('insulin').where({ user_id:req.params.id });
        if (userById.length === 0) {  
            res.status(404).json({ message:"The user with the specified ID does not exist." });
        } else {
            res.status(200).json({ ...userById, insulinById, bloodsugarById });
        }
    } catch (error) {
        res.status(500).json({ message:"Cannot retrieve the user", error:error });
    }
});




/**
 * @api {post} /api/users    POST /api/users
 * @apiVersion 1.0.0
 * @apiName Post User
 * @apiGroup Users
 *
 * @apiExample Request
 * axios.post('/api/users');
 *
 * @apiSuccess {string} username            Username (required)
 * @apiSuccess {number} bg_high            User Bg_high (required)
 * @apiSuccess {number} bg_low            User Bg_low (required)
 * @apiSuccess {number} bg_target_top            User Bg_target_top (defaults to 7, subject to change)
 * @apiSuccess {number} bg_target_bottom            User Bg_target_bottom (defaults to 3, subject to change)
 * @apiSuccess {number} height            User height 
 * @apiSuccess {number} weight            User weight
 * @apiSuccess {number} birthdate            User birthdate
 * @apiSuccess {string} gender            User gender
 * @apiSuccess {string} diabetes_type            Diabetes type (usually 1 or 2)
 * @apiSuccess {string} insulin            Insulin data pertaining to user (comes from insulin table)
 * @apiSuccess {string} bloodsugar            Bloodsugar data pertaining to user (comes from bloodsugar table)
 * 
 * @apiSuccessExample {json} Response
 *      HTTP/1.1 201
 *  {
        "message":"Thank you, user has been added"
    }
 * @apiError UsernameExists     Usernames must be unique
 * @apiErrorExample Response
 *      HTTP/1.1 400
 *      {
 *          "message":"Username exists, please choose another"
 *      }
*/

server.post('/', async (req, res) => {
    if(!req.body.username || !req.body.bg_high || !req.body.bg_low || !req.body.bg_target_top || !req.body.bg_target_bottom) {
        return res.status(400).json({ message:"Please include username, bg high and bg low" })
    }
    try {
        const checkUserExists = await db('users').where({ username:req.body.username }).first();
        if(checkUserExists) {
            return res.status(400).json({ message:"Username exists, please choose another" })
        }
        const [id] = await db('users').insert(req.body)
        res.status(201).json({ message:"Thank you, user has been added" });
    } catch (error) {
        res.status(500).json({ message:"Cannot add the user", error:error });
    }
});




/**
 * @api {delete} /api/users/:id    DELETE /api/users/:id
 * @apiVersion 1.0.0
 * @apiName Remove User
 * @apiGroup Users
 *
 * @apiExample Request
 * axios.delete('/api/users/{id}');
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
    const checkUserExists = await db('users').where({ id:req.params.id }).first();
    if(!checkUserExists) {
        return res.status(400).json({ message:"Sorry, user does not exist" })
    }
    try {
        const userDelete = await db('users').where('id',req.params.id).del();
        if (userDelete > 1) {
            res.status(200).json({ message: `${userDelete} users have been deleted` })    
        } else {
            res.status(200).json({ message: `${userDelete} user has been deleted` })
        }
    }
    catch (error) {
        res.status(500).json({ message:"Something went wrong deleting user!",error:error })
    }
});


module.exports = server;

