// const server = require('http').createServer();
// const io = require('socket.io')(server);
import http from 'http';
import {Server} from 'socket.io'

const server =http.createServer()

const io=new Server(server)

const PORT = 3000;

server.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}...`);
});

io.on('connection', (socket) => {
  console.log('a user connected');
});