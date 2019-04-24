// tried to combine this with restricted.js
// Need to double check the syntax on exporting multiple things from a file


const secrets = { jwtSecret: process.env.JWT_SECRET || 'keep it secret, keep it safe!' }

module.exports = secrets