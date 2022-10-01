import { useCallback, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { v4 } from 'uuid';
import { Subject } from 'rxjs';

mapboxgl.accessToken = 'pk.eyJ1IjoibWF4aWNvcHAiLCJhIjoiY2w4bTduZmx6MDY4bjN1cGoxMDlweGdneCJ9.6CZEiE5QYIuDjhuEmMoxcA';

export const useMapbox = (puntoInicial) => {
    const mapaDiv = useRef();
    // Mapa y coords
    const mapa = useRef();
    // Referencia de los marcadores
    const marcadores = useRef({});

    // Observables de Rxjs
    const movimientoMarcador = useRef(new Subject());
    const nuevoMarcador = useRef(new Subject());

    const [coords, setCoords] = useState(puntoInicial);

    const setRef = useCallback((node) => { mapaDiv.current = node }, []);

    // Función para agregar marcadores
    const agregarMarcador = useCallback(
        (ev) => {
            const { lng, lat } = ev.lngLat;
            const marker = new mapboxgl.Marker();
            marker.id = v4(); // TODO: Si el marcador ya tiene id

            marker.setLngLat([lng, lat]).addTo(mapa.current).setDraggable(true);

            // Asignamos al objeto de marcadores
            marcadores.current[marker.id] = marker;

            // TODO: Si el marcador tiene id no emitir
            nuevoMarcador.current.next({
                id: marker.id,
                lng,
                lat
            });

            // Escuchar movimientos del marcador
            marker.on('drag', ({ target }) => {
                const { id } = target;
                const { lng, lat } = target.getLngLat();

                // Emitir los cambios del marcador
                movimientoMarcador.current.next({
                    id,
                    lng,
                    lat
                });
            });
        },
        [],
    );

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
        mapa.current?.on('click', agregarMarcador);
    }, [agregarMarcador]);

    return {
        agregarMarcador,
        coords,
        marcadores,
        movimientoMarcador$: movimientoMarcador.current,
        nuevoMarcador$: nuevoMarcador.current,
        setRef
    }
}
