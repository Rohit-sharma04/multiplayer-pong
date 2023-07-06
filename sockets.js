let readyPlayerCount = 0;

function listen(io) {

  let room;
  io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
   
    socket.on('ready', () => {
      console.log('player ready', socket.id)
      room = 'room' + Math.floor(readyPlayerCount / 2);
      socket.join(room);

      readyPlayerCount++;
      if (readyPlayerCount % 2 === 0) {
        io.in(room).emit('startGame', socket.id)

      }
    })
    socket.on('paddleMove', (paddleData) => {
      socket.to(room).emit('paddleMove', paddleData)
    })

    socket.on('ballMove', (ballData) => {
      socket.to(room).emit('ballMove', ballData)
    })

    socket.on('disonnect', (reason) => {
      console.log(`player ${socket.id} disconnecte :${reason}`)
      socket.leave(room)
    })

  });
}

export default listen;