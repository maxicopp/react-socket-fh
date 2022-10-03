import React, { useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketContext';
import { useMapbox } from '../hooks/useMapbox';

const puntoInicial = {
    lng: -68.2816,
    lat: -54.8353,
    zoom: 12
};

export const MapaPage = () => {

    const { coords, setRef, movimientoMarcador$, nuevoMarcador$ } = useMapbox(puntoInicial);
    const { socket } = useContext(SocketContext);

    // Nuevo marcador
    useEffect(() => {
        nuevoMarcador$.subscribe(marcador => {
            socket.emit('marcador-nuevo', marcador);
        })
    }, [nuevoMarcador$, socket]);

    // Movimiento marcador
    useEffect(() => {
        movimientoMarcador$.subscribe(marcador => {
            // console.log(marcador);
        })
    }, [movimientoMarcador$]);

    // Escuchar nuevos marcadores
    useEffect(() => {
      socket.on('marcador-nuevo', marcador => {
        console.log(marcador);
      })
    }, [socket]);

    return (
        <>
            <div className="info">
                Lng: {coords.lng} | lat: {coords.lat} | zoom: {coords.zoom}
            </div>
            <div ref={setRef} className="mapContainer" />
        </>
    )
}
