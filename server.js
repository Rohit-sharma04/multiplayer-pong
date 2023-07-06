// const server = require('http').createServer();
// const io = require('socket.io')(server);
import http from 'http';
import { Server } from 'socket.io'
import listen from './sockets.js';
import apiServer from './api.js';

const httpServer = http.createServer(apiServer)

const io = new Server(httpServer)

const PORT = 3000;

httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

listen(io) //listen function from sockets 


