import React, { useEffect } from 'react';

import { Portal } from './Portal/index';

import { Overlay, Dialog } from './styles';

export function Modal({ children, open, onClose }) {
    useEffect(() => {
        function onEsc(e) {
            if(e.keyCode == 27) { onClose() }
        };

        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc);
        };
    }, [onClose]);

    if(!open) { return null };

    return(
        <Portal>
            <Overlay onClick={ () => onClose() }>
                <Dialog onClick={ e => e.stopPropagation() }>{ children }</Dialog>
            </Overlay>
        </Portal>
    );
};