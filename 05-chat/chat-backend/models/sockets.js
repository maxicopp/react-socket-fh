
class Sockets {

    constructor(io) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {

            console.log('cliente conectado');

            // TODO: Validar el JWT
            // Si el token no es válido, desconectar

            // TODO: Saber que usuario está activo mediante el UID

            // TODO: Emitir todos los usuarios conectados

            // TODO: Socket join

            // TODO: Escuchar cuando un cliente manda un mensaje
            // mensaje-personal

            // TODO: Disconnect
            // Marcar en la BD que el usuario se desconectó

            // TODO: Emitir todos los usuarios conectados


        });
    }


}


module.exports = Sockets;