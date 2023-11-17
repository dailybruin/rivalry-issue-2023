import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { mediaQueries } from '../shared/config';
import first_fg from "../images/FieldGoal.png"
import {isMobile} from 'react-device-detect';


const ImageContainer = styled.div`
    background-color: #5A8124;
    overflow: hidden;
    position: relative;    
`;

const Box = styled.div`
    position: relative;
    ${mediaQueries.mobile}{
        margin-top: -130px;
        scale: 0.35;
        margin-right: 190px;
    }
`

const FieldGoalImage = styled.img`
    padding-bottom: 0px;
    margin-bottom: -350px; 
    margin-top: -50px;
    transform: rotate(180deg);
    ${mediaQueries.mobile}{
        height: 500px;
        width: 300px;
    }
`;


const SecondFieldGoal = (props) => {
    const interactive = props.interactive.interactive
    const [isMobileDevice, setIsMobileDevice] = useState(isMobile)

    useEffect(() => {
        console.log("here");
        const handleMessage = (event) => {
          if (event.data["datawrapper-height"]) {
            const iframes = document.querySelectorAll("iframe");
            for (const key in event.data["datawrapper-height"]) {
                for (let i = 0; i < iframes.length; i++) {
                    if (iframes[i].contentWindow === event.source) {
                        const height = event.data["datawrapper-height"][key] + "px";
                        iframes[i].style.height = height;
                    }
                }
            }
          }
        };
    
        window.addEventListener("message", handleMessage);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener("message", handleMessage);
        };
    });

    useEffect(() => {
        setIsMobileDevice(isMobile);
      }, []);

    
    return (
        <>
        
        <ImageContainer>
            <FieldGoalImage src={first_fg}/>
            <Box>
            <iframe 
                title="Football Team Expenses vs Overall Game Wins" 
                aria-label="Scatter Plot" id="datawrapper-chart-DaoZm" 
                src="https://datawrapper.dwcdn.net/DaoZm/3/?transparent=false" 
                scrolling="no" 
                frameborder="0" 
                width="700"
                height="650"
                style={{border: "none", background: "white", padding: "20px", marginLeft: "1.5%"}} 
                data-external="1"></iframe>
            </Box>
            
        </ImageContainer>
        </>
    )
}

export default SecondFieldGoal