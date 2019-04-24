const express = require('express');
const path = require('path');
const routesApi = require('./routesApi');
const routesAuth = require('./routesAuth');
const routesUsers = require('./routesUsers');
const routesInsulin = require('./routesInsulin');
const routesBloodsugar = require('./routesBloodsugar');
const restricted = require('../auth/restricted.js');

const apiDocsPath = path.join( __dirname, "../../docs" );


module.exports = server => {
    server.use('/api', routesApi);
    server.use('/api/auth', routesAuth);
    server.use('/api/users', routesUsers);
    server.use('/api/users/insulin', restricted, routesInsulin);
    server.use('/api/users/bloodsugar', restricted, routesBloodsugar);
    server.use('/', express.static(apiDocsPath));
}

