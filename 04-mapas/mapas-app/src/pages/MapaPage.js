import React, { useEffect } from 'react';
import { useMapbox } from '../hooks/useMapbox';

const puntoInicial = {
    lng: -68.2816,
    lat: -54.8353,
    zoom: 12
};

export const MapaPage = () => {

    const { coords, setRef, movimientoMarcador$, nuevoMarcador$ } = useMapbox(puntoInicial);

    // Nuevo marcador
    useEffect(() => {
        nuevoMarcador$.subscribe(marcador => {
            // TODO: emitir nuevo marcador
        })
    }, [nuevoMarcador$]);

    // Movimiento marcador
    useEffect(() => {
        movimientoMarcador$.subscribe(marcador => {
            // console.log(marcador);
        })
    }, [movimientoMarcador$]);


    return (
        <>
            <div className="info">
                Lng: {coords.lng} | lat: {coords.lat} | zoom: {coords.zoom}
            </div>
            <div ref={setRef} className="mapContainer" />
        </>
    )
}
