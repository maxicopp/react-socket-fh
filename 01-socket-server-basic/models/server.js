const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

class Server {
    constructor() {
        this.app = express();
        this.port = 8080;

        // Http server
        this.server = http.createServer(this.app);

        // Configuraciones de sockets
        this.io = socketIo(this.server, {/* Configuraciones */ });
    }

    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    configurarSockets() {

    }

    execute() {
        // Inicializar Middlewares
        this.middlewares();

        // Inicializar sockets
        this.configurarSockets();

        // Inicializar server
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto: ', this.port);
        });
    }
}

module.exports = Server;
