import styled from 'styled-components'
import { mediaQueries } from '../shared/config';
import first_fg from "../images/FieldGoal.png"

const ImageContainer = styled.div`
    background-color: #5A8124;
    overflow: hidden;
    position: relative;
`;

const TextBox = styled.div`
    display: flex;
    position: absolute;
    margin-top: 200px;
    margin-left: 25%;
    width: 800px; 
    height: 305px; 
    color: white; 
`;

const FieldGoalImage = styled.img`
    padding-bottom: 0px;
    margin-bottom: -30px; 
    margin-top: 100px;
    ${mediaQueries.mobile}{
        height: 700px;
        width: 500px;
    }
`;

const FirstFieldGoal = (props) => {
    const blurb = props.text.blurb_text
    return (
        <>
        <ImageContainer>
        <TextBox> {blurb}</TextBox>
        <FieldGoalImage src={first_fg}/>
        </ImageContainer>
        </>
    )
}

export default FirstFieldGoal
