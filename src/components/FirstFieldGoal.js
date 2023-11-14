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
    margin-top: 12%;
    margin-left: 22%;
    width: 800px; 
    height: 305px; 
    color: white; 
    font-family: 'Inria Serif', serif;
    font-size: 30px;
    text-align: justify;

    ${mediaQueries.mobile}{
        margin-top: 35%;
        margin-left: 19%;
        width: 60%;
        font-size: 16px;
    }
`;

const FieldGoalImage = styled.img`
    padding-bottom: 0px;
    margin-bottom: -30px; 
    margin-top: 100px;
    ${mediaQueries.mobile}{
        height: 500px;
        width: 300px;
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

