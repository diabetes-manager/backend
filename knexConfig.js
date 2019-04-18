const knex = require('knex');
const dbEnv = process.env.DB_ENV || 'development';

const config = require('./knexfile.js')[dbEnv];

module.exports = knex(config);


