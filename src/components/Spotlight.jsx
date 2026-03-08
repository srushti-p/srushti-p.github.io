import React from 'react';
import useSpotlightEffect from '../hooks/useSpotlightEffect'; // Adjust the path as needed

const Spotlight = () => {
    const canvasRef = useSpotlightEffect();

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 1000,
            }}
        />
    );
};

export default Spotlight;
