import styled from 'styled-components'
import { mediaQueries } from '../shared/config';
import first_fg from "../images/FieldGoal.png"

const ImageContainer = styled.div`
    background-color: #5A8124;
    overflow: hidden;
    position: relative;
`;

const TextBox = styled.div`
    margin-top: 400px;
    margin-left: 500px;
    display: flex;
    position: absolute;
    width: 800px; 
    height: 305px; 
    color: white; 
    ${mediaQueries.mobile}{
        margin-left: 250px;
    }
`;

const FieldGoalImage = styled.img`
    padding-bottom: 0px;
    margin-bottom: 100px; 
    margin-top: -50px;
    transform: rotate(180deg);
    ${mediaQueries.mobile}{
        height: 700px;
        width: 500px;
    }
`;

const SecondFieldGoal = (props) => {
    const interactive = props.interactive.interactive
    return (
        <>
        <ImageContainer>
        <TextBox> {interactive} </TextBox>
        <FieldGoalImage src={first_fg}/>
        </ImageContainer>
        </>
    )
}

export default SecondFieldGoal
