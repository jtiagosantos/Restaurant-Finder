import React from 'react';
import ReactStars from "react-rating-stars-component";

import restaurant from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantTitle, RestaurantAddress, RestaurantPhoto } from './styles';

export function RestaurantCard() {
    return(
        <Restaurant>
            <RestaurantInfo>
                <RestaurantTitle>Nome do Restaurante</RestaurantTitle>
                <ReactStars 
                    count={ 5 } 
                    value={ 4 }
                    isHalf 
                    activeColor="#e7711c" 
                    edit={ false }
                />
                <RestaurantAddress>Rua São Clemente, 414</RestaurantAddress>
            </RestaurantInfo>
            <RestaurantPhoto src={ restaurant } alt="Foto do Restaurante" />
        </Restaurant>
    );
};