import {useState} from "react";


export const useZoom = () => {
    const [zoomLevel, setZoomLevel] = useState(1);
    const maxZoom = 2;
    const minZoom = 0.5;

    const zoomIn = () => {
        setZoomLevel(prevZoomLevel => Math.min(prevZoomLevel + 0.1, maxZoom));
    };

    const zoomOut = () => {
        setZoomLevel(prevZoomLevel => Math.max(prevZoomLevel - 0.1, minZoom));
    };

    const styles = {
        transform: `scale(${zoomLevel})`,
        transformOrigin: 'left top'
    };

    return {
        zoomIn,
        zoomOut,
        styles,
        zoomLevel: `${Math.round(zoomLevel * 100)}%`
    }
}
