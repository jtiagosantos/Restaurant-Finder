import React from 'react';

import { Card, NameRestaurant } from './styles';

export function ImageCard({ photo, title }) {
    return(
        <Card photo={ photo }>
            <NameRestaurant>{ title }</NameRestaurant>
        </Card>
    );
};