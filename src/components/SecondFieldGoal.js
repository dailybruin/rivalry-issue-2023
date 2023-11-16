import { useEffect } from 'react';
import styled from 'styled-components'
import { mediaQueries } from '../shared/config';
import first_fg from "../images/FieldGoal.png"

const ImageContainer = styled.div`
    background-color: #5A8124;
    overflow: hidden;
    position: relative;
`;

const ImageBox = styled.img`
    position: absolute;
    top: 32%;
    left: 21%;
    max-width: 60%; 
    // max-height: 80%; 
    display: flex;

    ${mediaQueries.mobile}{
        margin-top: 50%;
        margin-left: 14%;
        max-width: 73%;
        max-height: 73%;
    }
`;

const FieldGoalImage = styled.img`
    padding-bottom: 0px;
    margin-bottom: 100px; 
    margin-top: -50px;
    transform: rotate(180deg);
    ${mediaQueries.mobile}{
        height: 500px;
        width: 300px;
    }
`;

const SecondFieldGoal = (props) => {
    const interactive = props.interactive.interactive
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

    return (
        <>
        <ImageContainer>
            <FieldGoalImage src={first_fg}/>
            <ImageBox src={interactive}/>
            {/* <iframe 
                title="Football Team Expenses vs Overall Game Wins" 
                aria-label="Scatter Plot" id="datawrapper-chart-DaoZm" 
                src="https://datawrapper.dwcdn.net/DaoZm/3/" scrolling="no" frameborder="0" 
                style={{width: 0, minWidth: "100% !important", border: "none", height:"562", dataExternal:"1"}}> 
            </iframe> */}
        </ImageContainer>
        </>
    )
}

export default SecondFieldGoal