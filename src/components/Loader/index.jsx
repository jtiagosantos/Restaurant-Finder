import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/restaurants-loading.json';

export function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <Lottie options={ defaultOptions } />;
};