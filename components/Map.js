import React, { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import tw from 'tailwind-styled-components';
import mapboxGl from 'mapbox-gl'

const mapToken = 'pk.eyJ1IjoiY3Jpc3RvcGhlcnZhIiwiYSI6ImNsMHR5bHhqaDBpOG4zZHBiYW9yeHh3aXgifQ.imUeUYf0dobq3s-W-pD8RA';

mapboxGl.accessToken = mapToken;

export const Map = ({ pickupCoordinates, dropoffCoordinates }) => {

    useEffect(() => {
        const map = new mapboxGl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 10
        });

        if (pickupCoordinates) {
            addToMap(map, pickupCoordinates)
        }

        if (dropoffCoordinates) {
            addToMap(map, dropoffCoordinates)
        }

        if (pickupCoordinates && dropoffCoordinates) {
            map.fitBounds([
                pickupCoordinates,
                dropoffCoordinates
            ],{
                padding: 100
            })
        }

    }, [pickupCoordinates, dropoffCoordinates])

    const addToMap = (map, coordinate) => {
        const marker1 = new mapboxGl.Marker({ rotation: 0 })
            .setLngLat(coordinate)
            .addTo(map);
    }


    return (
        <Wrapper id="map">Map</Wrapper>
    )
}

const Wrapper = tw.div`
    flex-1  h-1/2
`