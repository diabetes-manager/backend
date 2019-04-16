require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 3333;
server.listen(port, () => console.log(`\n\n--- Swooosh, ${port} points! ---\n`));

