import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWF4aWNvcHAiLCJhIjoiY2w4bTduZmx6MDY4bjN1cGoxMDlweGdneCJ9.6CZEiE5QYIuDjhuEmMoxcA';
const puntoInicial = {
    lng: -58.3690,
    lat: -34.6680,
    zoom: 17
};

export const MapaPage = () => {
    const mapaDiv = useRef();
    const [mapa, setMapa] = useState();
    const [coords, setCoords] = useState(puntoInicial);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapaDiv.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [puntoInicial.lng, puntoInicial.lat],
            zoom: puntoInicial.zoom
        });

        setMapa(map);
    }, []);

    // Cuando se mueve el mapa
    useEffect(() => {
        mapa?.on('move', () => {
            const { lng, lat } = mapa.getCenter();
            setCoords({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: mapa.getZoom().toFixed(2)
            });
        });
    }, [mapa]);


    return (
        <>
            <div className="info">
                Lng: {coords.lng} | lat: {coords.lat} | zoom: {coords.zoom}
            </div>
            <div ref={mapaDiv} className="mapContainer" />
        </>
    )
}
