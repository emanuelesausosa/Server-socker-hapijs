function channel(listener) {
  let io = require("socket.io")(listener);

  // crear evento conectar
  io.on("connect", socket => {
    console.log(`Cliente ${socket.client.id} se ha conectado`);

    // todos los eventos

    // evento desconexion
    socket.on("disconnect", () => {
      console.log(`Cliente ${socket.client.id} se ha desconectado`);
    });
  });
}

module.exports = channel;
