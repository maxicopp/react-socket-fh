import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWF4aWNvcHAiLCJhIjoiY2w4bTduZmx6MDY4bjN1cGoxMDlweGdneCJ9.6CZEiE5QYIuDjhuEmMoxcA';
const puntoInicial = {
    lng: 5,
    lat: 34,
    zoom: 10
};

export const MapaPage = () => {
    const mapaDiv = useRef();
    const [, setMapa] = useState();

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapaDiv.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [puntoInicial.lng, puntoInicial.lat],
            zoom: puntoInicial.zoom
        });

        setMapa(map);
    }, []);

    return (
        <>
            <div ref={mapaDiv} className="mapContainer" />
        </>
    )
}
