const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser')

const configureRoutes = require('./routes/router.js');

const server = express();


server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));



configureRoutes( server );



module.exports = server;

