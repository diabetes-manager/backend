const express = require('express');
const path = require('path');
const routesApi = require('./routesApi');
const routesUsers = require('./routesUsers');

const apiDocsPath = path.join( __dirname, "../../docs" );

module.exports = server => {
    server.use('/api', routesApi);
    server.use('/api/users', routesUsers);
    server.use('/', express.static(apiDocsPath));
}
