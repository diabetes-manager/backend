const express = require('express');
const helmet = require('helmet');

const db = require('../knexConfig.js');

const server = express();

server.use(helmet());
server.use(express.json());





// GET base route, say hello
server.get('/', async (req, res) => {
    res.status(200).json({ message:"Hello!" })
})




server.get('/', async (req, res) => {
  try {
    const users = await db('users');
    res.status(200).json({ message: users });
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the users' });
  }
});

server.post('/', async (req, res) => {
  try {
    const [id] = await db('users').insert(req.body);
    const users = await db('users');

    res.status(201).json(users);
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot add the user' });
  }
});

module.exports = server;
