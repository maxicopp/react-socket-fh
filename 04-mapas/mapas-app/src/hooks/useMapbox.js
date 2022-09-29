import { useCallback, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { v4 } from 'uuid';

mapboxgl.accessToken = 'pk.eyJ1IjoibWF4aWNvcHAiLCJhIjoiY2w4bTduZmx6MDY4bjN1cGoxMDlweGdneCJ9.6CZEiE5QYIuDjhuEmMoxcA';

export const useMapbox = (puntoInicial) => {
    const mapaDiv = useRef();
    // Mapa y coords
    const mapa = useRef();
    // Referencia de los marcadores
    const marcadores = useRef({});

    const [coords, setCoords] = useState(puntoInicial);

    const setRef = useCallback((node) => { mapaDiv.current = node }, []);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapaDiv.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [puntoInicial.lng, puntoInicial.lat],
            zoom: puntoInicial.zoom
        });

        mapa.current = map;
    }, [puntoInicial]);

    // Cuando se mueve el mapa
    useEffect(() => {
        mapa.current?.on('move', () => {
            const { lng, lat } = mapa.current.getCenter();
            setCoords({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: mapa.current.getZoom().toFixed(2)
            });
        });
    }, []);

    // Agregar marcadores cuando hago click
    useEffect(() => {
        mapa.current?.on('click', (ev) => {
            const { lng, lat } = ev.lngLat;
            const marker = new mapboxgl.Marker();
            marker.id = v4(); // TODO: Si el marcador ya tiene id

            marker.setLngLat([lng, lat]).addTo(mapa.current).setDraggable(true);

            marcadores.current[marker.id] = marker;
        });
    }, []);

    return {
        coords,
        marcadores,
        setRef
    }
}
