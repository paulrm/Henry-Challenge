'use strict'

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/index.js');

const server = express();
const port = process.env.PORT || 3000


server.use('/', routes);
server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());
server.use(cors());

server.listen(port, () => {
    console.log(`Corriendo en el puerto http://localhost:${port}`)
})



module.exports = server;