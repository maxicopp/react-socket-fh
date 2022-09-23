const TicketList = require('./ticket-list');
class Sockets {

    constructor(io) {

        this.io = io;

        // Crear la instancia de nuestro ticketlist
        this.ticketList = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {

            console.log('cliente conectado');

            socket.on('solicitar-ticket', (data, callback) => {
                const nuevoTicket = this.ticketList.crearTicket();
                callback(nuevoTicket);
            });


        });
    }


}


module.exports = Sockets;