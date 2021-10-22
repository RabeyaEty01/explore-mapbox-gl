import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from 'mapbox-gl-directions-v2/dist/mapbox-gl-directions';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFiZXlhZXR5MDEiLCJhIjoiY2t2Mjc1MnE2ODN1ZDJ2bnp6bTk3azJ6NSJ9.yJSF1S7L6WnlJnEpIDp7nA';

const MapDirection = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.389099, 23.791599], //longitude, latitude
            zoom: 13
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    },[])

    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;