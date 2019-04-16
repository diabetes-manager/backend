const express = require('express');

const db = require('../../knexConfig.js');

const server = express.Router();

/**
 * @api {get} / Get Root
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiGroup Root
 *
 * @apiExample Request example:
 * axios.get('/');
 *
 * @apiUse Error
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

// GET /users, all the users
server.get('/', async (req, res) => {
    try {
        const users = await db('users');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message:"Cannot retrieve the users", error:error });
    }
});


// GET /users/:id, get specific user by id
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


// POST /users
server.post('/', async (req, res) => {
    if(!req.body.username || !req.body.bg_high || !req.body.bg_low || !req.body.bg_target_top || !req.body.bg_target_bottom) {
        return res.status(400).json({ message:"Please include username, bg high and bg low" 
    })}
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



// Delete a user from the usersdb
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

