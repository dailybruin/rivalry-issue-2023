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
    return (
        <>
        <ImageContainer>
            <FieldGoalImage src={first_fg}/>
            <ImageBox src={interactive}/>
        </ImageContainer>
        </>
    )
}

export default SecondFieldGoal