const hapi = require("hapi");
const Server = new hapi.Server();
const io = require("./channels");

// establecer las constantes del server (port, host)
Server.connection({ port: 3000, host: "localhost" });

Server.register(require("inert"), () => {
  // crear una ruta
  // -> method
  // -> path
  // -> handler (manipula el request, el response)
  Server.route({
    method: "GET",
    path: "/",
    handler: (request, reply) => {
      //reply.response("Hola chicos");
      reply.file("./index.html");
    }
  });

  // inicializar el server
  Server.start(err => {
    if (err) throw err;
    console.log(`> Server start on ${Server.info.uri}`);
  });
});

// conecto mis canales de sockets
io(Server.listener);
