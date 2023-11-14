import styled from 'styled-components'
import first_fg from "../images/FirstFieldGoal.png"
import first_fg_mobile from "../images/FirstGoalMobile.png"

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
    width: 95%;
    max-width: 956px;
`;

const FieldGoalMobile = styled.img`
    padding-bottom: 0px;
    margin-bottom: 0px; 
    margin-top: 100px;
    width: 95%;
    max-width: 249px;
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

