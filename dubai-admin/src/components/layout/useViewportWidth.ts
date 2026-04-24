import { useSyncExternalStore } from 'react';

const DESKTOP_FALLBACK_WIDTH = 1920;

const subscribe = (callback: () => void) => {
    window.addEventListener('resize', callback);

    return () => {
        window.removeEventListener('resize', callback);
    };
};

const getSnapshot = () => window.innerWidth;

const getServerSnapshot = () => DESKTOP_FALLBACK_WIDTH;

export const useViewportWidth = () => {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
