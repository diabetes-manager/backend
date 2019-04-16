const express = require('express');
const helmet = require('helmet');
const routesUsers = require('./routes/routesUsers');



const server = express();

server.use(helmet());
server.use(express.json());

server.use('/users', routesUsers);





// GET base route, say hello
server.get('/', async (req, res) => {
    res.status(200).json({ message:"Hello!" })
})




module.exports = server;



