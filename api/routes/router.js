const express = require('express');
const path = require('path');
const routesApi = require('./routesApi');
const routesUsers = require('./routesUsers');
const routesInsulin = require('./routesInsulin');
const routesBloodsugar = require('./routesBloodsugar');

const apiDocsPath = path.join( __dirname, "../../docs" );

module.exports = server => {
    server.use('/api', routesApi);
    server.use('/api/users', routesUsers);
    server.use('/api/users/insulin', routesInsulin);
    server.use('/api/users/bloodsugar', routesBloodsugar);
    server.use('/', express.static(apiDocsPath));
}
