import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

export const BandList = () => {
    const [bands, setBands] = useState([]);
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.on('current-bands', (bands) => {
            setBands(bands);
        });

        return () => socket.off('current-bands');
    }, [socket]);

    const changeName = (event, id) => {
        const newName = event.target.value;
        setBands(bands => bands.map(band => {
            if (band.id === id) {
                band.name = newName;
            }
            return band;
        }));
    }

    const onLostFocus = (id, name) => socket.emit('change-band-name', {
        id,
        name
    });

    const vote = (id) => socket.emit('vote-band', id);

    const deleteBand = (id) => socket.emit('delete-band', id);

    const createRows = () => {
        return (
            bands.map(band => (
                <tr key={band.id}>
                    <td>
                        <button
                            className="btn btn-primary"
                            onClick={() => vote(band.id)}
                        >
                            +1
                        </button>
                    </td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            value={band.name}
                            onChange={(event) => changeName(event, band.id)}
                            onBlur={() => onLostFocus(band.id, band.name)}
                        />
                    </td>
                    <td><h3>{band.votes}</h3></td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => deleteBand(band.id)}
                        >
                            Borrar
                        </button>
                    </td>
                </tr>
            ))
        );
    }
    return (
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {createRows()}
                </tbody>
            </table>
        </>
    )
}
