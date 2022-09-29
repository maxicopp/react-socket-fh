import React, { useEffect } from 'react';
import { useMapbox } from '../hooks/useMapbox';

const puntoInicial = {
    lng: -68.2816,
    lat: -54.8353,
    zoom: 12
};

export const MapaPage = () => {

    const { coords, setRef, nuevoMarcador$ } = useMapbox(puntoInicial);

    useEffect(() => {
        nuevoMarcador$.subscribe(marcador => {
            // TODO: emitir nuevo marcador
        })
    }, [nuevoMarcador$]);

    return (
        <>
            <div className="info">
                Lng: {coords.lng} | lat: {coords.lat} | zoom: {coords.zoom}
            </div>
            <div ref={setRef} className="mapContainer" />
        </>
    )
}
