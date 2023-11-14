import React, { useState, useEffect } from 'react';
import Mobile from './MobileField';
import Desktop from './DesktopField';

const Field = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? <Mobile articles={props.articles}/> : <Desktop articles={props.articles}/>}
        </div>
    );
};

export default Field;
