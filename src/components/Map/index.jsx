import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

export const MapContainer = props => {
    const [map, setMap] = useState(null);
    const { google, query, placeId } = props;

    const dispatch = useDispatch();
    const { restaurants } = useSelector(state => state.restaurants);

    const searchByQuery = useCallback(() => {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurants([]));

        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query
        };

        service.textSearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results));
            }
        });
    }, [
        dispatch, 
        map, 
        query, 
        google.maps.places.PlacesService, 
        google.maps.places.PlacesServiceStatus.OK
    ]);

    const getRestaurantById = useCallback(() => {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurant(null));

        const request = {
            placeId, 
            fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number']
        };

        service.getDetails(request, (place, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurant(place));
            }
        });
    }, [
        dispatch, 
        map, 
        placeId, 
        google.maps.places.PlacesService,
        google.maps.places.PlacesServiceStatus.OK
    ]);

    useEffect(() => {
        if(query) { searchByQuery(query) }
    }, [query, searchByQuery]);

    useEffect(() => {
        if(placeId) {
            getRestaurantById(placeId);
        }
    }, [placeId, getRestaurantById]);

    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurants([]));

        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant']
        };

        service.nearbySearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results));
            }
        });
    };

    function onMapReady(_, map) {
        setMap(map);
        searchNearby(map, map.center);
    };

    return <Map 
                google={ google } 
                centerAroundCurrentLocation 
                onReady={ onMapReady } 
                onRecenter={ onMapReady }
                { ...props }>
                    { restaurants.map(restaurant => {
                        return(
                            <Marker 
                                key={ restaurant.place_id } 
                                name={ restaurant.name }
                                position={{
                                    lat: restaurant.geometry.location.lat(),
                                    lng: restaurant.geometry.location.lng(),
                            }}/>
                        );
                    }) }
            </Map>;
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR'
})(MapContainer);