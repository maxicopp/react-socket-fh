import React, { useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketContext';
import { useMapbox } from '../hooks/useMapbox';

const puntoInicial = {
    lng: -68.2816,
    lat: -54.8353,
    zoom: 12
};

export const MapaPage = () => {

    const { coords, setRef, movimientoMarcador$, nuevoMarcador$, agregarMarcador } = useMapbox(puntoInicial);
    const { socket } = useContext(SocketContext);

    // Escuchar los marcadores existentes
    useEffect(() => {
      socket.on('marcadores-activos', marcadores => {
        for (const key of Object.keys(marcadores)) {
            agregarMarcador(marcadores[key], key);
        }
      })
    }, [agregarMarcador, socket]);

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
