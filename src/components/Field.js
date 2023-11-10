import React, { useState, useEffect } from 'react';
import Mobile from './MobileField';
import Desktop from './DesktopField';

const Field = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? <Mobile /> : <Desktop />}
        </div>
    );
};

export default Field;
