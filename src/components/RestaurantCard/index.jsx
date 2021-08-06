import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantTitle, RestaurantAddress, RestaurantPhoto } from './styles';

import { Skeleton } from '../Skeleton/index';

export function RestaurantCard({ restaurant, onClick }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return(
        <Restaurant onClick={ onClick }>
            <RestaurantInfo>
                <RestaurantTitle>{ restaurant.name }</RestaurantTitle>
                <ReactStars 
                    count={ 5 } 
                    value={ restaurant.rating }
                    isHalf 
                    activeColor="#e7711c" 
                    edit={ false }
                />
                <RestaurantAddress>
                    { restaurant.vicinity || restaurant.formatted_address }
                </RestaurantAddress>
            </RestaurantInfo>
            <RestaurantPhoto 
                imageLoaded={ imageLoaded }
                src={ restaurant.photos ? restaurant.photos[0].getUrl() : restaurante } 
                alt="Foto do Restaurante" 
                onLoad={ () => setImageLoaded(true) }
            />
            { !imageLoaded && <Skeleton width="100px" height="100px" /> }
        </Restaurant>
    );
};