import React, { useState, useEffect } from 'react';

import { Card, NameRestaurant } from './styles';

import { Skeleton } from '../Skeleton/index';

export function ImageCard({ photo, title }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);
    }, [photo]);

    return(
        <>
            { imageLoaded ? (
                <Card photo={ photo }>
                    <NameRestaurant>{ title }</NameRestaurant>
                </Card>
            ) : (
                <Skeleton width="90px" height="90px" />
            )}
        </>
        
    );
};