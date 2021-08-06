export const Types = {
    SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS', //para armazenar os restaurantes da busca
    SET_RESTAURANT: 'restaurants/SET_RESTAURANT', //para armazenar os dados do restaurante para o modal
};

const initialState = {
    restaurants: [],
    restaurantSelected: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.SET_RESTAURANTS:
            return { ...state, restaurants: action.payload }
        case Types.SET_RESTAURANT:
            return { ...state, restaurantSelected: action.payload }
        default:
            return state;
    };
};

export function setRestaurants(restaurants) {
    return {
        type: Types.SET_RESTAURANTS, 
        payload: restaurants
    };
};

export function setRestaurant(restaurant) {
    return {
        type: Types.SET_RESTAURANT, 
        payload: restaurant
    };
};