import styled from 'styled-components'
import first_fg from "../images/SecondFieldGoal.png"

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
    padding-top: 0px;
    margin-top: 0px; 
    margin-bottom: 100px;
`;

const SecondFieldGoal = (props) => {
    return (
        <>
        <ImageContainer>
        <TextBox> 
        </TextBox>
        <FieldGoalImage src={first_fg}/>
        </ImageContainer>
        </>
    )
}

export default SecondFieldGoal
