const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require( "path" );

const configureRoutes = require( "./routes/router.js" );

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use(bodyParser.urlencoded({ extended: true }));

configureRoutes( server );



module.exports = server;

