const http = require('http');
const express = require('express');
const initMiddlewares = require('./middlewares/general');
const { host, port } = require('./config');

const app = express();
initMiddlewares(app);

const server = http.createServer(app);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});