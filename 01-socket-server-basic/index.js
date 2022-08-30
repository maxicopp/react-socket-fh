const Server = require("./models/server");

const server = new Server();

server.execute();

// io.on('connection', (socket) => {
//     // socket.emit('mensaje-bienvenida', {
//     //     msg: 'Bienvenido al server',
//     //     fecha: new Date()
//     // });

//     // escuchar el evento
//     // mensaje-cliente
//     // console.log(data);
//     socket.on('mensaje-to-server', (data) => {
//         console.log(data);

//         io.emit('mensaje-from-server', data);
//     });
// });


