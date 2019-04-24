const express = require('express');
const server = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../knexConfig.js');

const secret = require('../auth/secrets').jwtSecret; 

server.use(express.json());

const errors = { // J.Pinkman Dynamic error messaging based on sqlite codes 
    '1': 'We ran into an error, yo! I dunno!',
    '4': 'Operation aborted, yo!',
    '9': 'Operation aborted, yo!',
    '19': 'Another record with that value exists, yo!'
};





// POST /api/auth/register
server.post('/register', async (req, res) => {
    if(!req.body.username || !req.body.bg_high || !req.body.bg_low || !req.body.password) {
        return res.status(400).json({ message:"Please include username, password, bg high and bg low" })
    }
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash;

    try {
        const checkUserExists = await db('users').where({ username:req.body.username }).first();
        if (checkUserExists) {
            return res.status(404).json({ message:"Username exists, please choose another" })
        }
        const [id] = await db('users').insert(user)
        return res.status(201).json({ message:"User Added", id:id })
    } catch(error) {
        return res.status(500).json({ error:errors[error.errno] || "error" })
    }

});




// POST /api/auth/login
server.post('/login', async (req, res) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message:"Username and password required" })
    }
    let { username, password } = req.body;

    const foundUser = await db('users').where({ username: username }).first();
    if (!foundUser) return res.status(404).json({ error:"Username not found" })

    try {
        if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
            const token = generateToken(foundUser);
            return res.status(200).json({
                message: `Welcome ${foundUser.username}!`,
                token,
            });
        }
        return res.status(401).json({ message: 'You shall not pass!' });
    } catch (error) {
        return res.status(500).json({ error:errors[error.errno] || "error" })
    }

});


function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };
    const options = {
        expiresIn: '1d',
    };
    return jwt.sign(payload, secret, options); // returns valid token
}


module.exports = server;

