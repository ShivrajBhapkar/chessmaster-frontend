import { useEffect, useState } from "react";

export const useResponsiveBoxSize = () => {
    const [boxSize, setBoxSize] = useState(80); // Default size

    useEffect(() => {
        const updateBoxSize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) { // Mobile
                setBoxSize(40);
            } else if (screenWidth < 1024) { // Tablet
                setBoxSize(60);
            } else { // Laptop/Desktop
                setBoxSize(80);
            }
        };

        updateBoxSize();
        window.addEventListener('resize', updateBoxSize);
        return () => window.removeEventListener('resize', updateBoxSize);
    }, []);

    return boxSize;
};