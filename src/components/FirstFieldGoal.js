import styled from 'styled-components'
import first_fg from "../images/FirstFieldGoal.png"

const ImageContainer = styled.div`
    background-color: #5A8124;
    overflow: hidden;
    position: relative;
`;

const TextBox = styled.div`
    display: flex;
    position: absolute;
    width: 800px; 
    height: 305px; 
    color: white; 
`;

const FieldGoalImage = styled.img`
    padding-bottom: 0px;
    margin-bottom: 0px; 
    margin-top: 100px;
`;

const FirstFieldGoal = (props) => {
    return (
        <>
        <ImageContainer>
        <TextBox> 
        There will be a blurb here words words words words words 
        words words words words words words words words words words words words words 
        words words words words words words words words words words words words words 
        words words words words words words words words words words words words words words 
        words words words words words words words words words words words words words words
        </TextBox>
        <FieldGoalImage src={first_fg}/>
        </ImageContainer>
        </>
    )
}

export default FirstFieldGoal

