'use client'; // Only needed for Next.js

import { useEffect } from 'react';
import useFluidCursor from '../hooks/useFluidCursor'; // Ensure correct path

const FluidCursor = () => {
    useEffect(() => {
        useFluidCursor();
    }, []);

    return (
        <canvas
            id="fluid"
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-[9999]"
            style={{
                position: 'fixed', // Keeps the canvas fixed at the top
                top: 0,
                left: 0,
                width: '100vw', // Ensures full width
                height: '100vh', // Ensures full height
                pointerEvents: 'none', // Prevents it from blocking interactions
                zIndex: 9999, // Ensures it is on top
            }}
        />
    );
};

export default FluidCursor;
