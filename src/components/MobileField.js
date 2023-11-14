import styled from 'styled-components'
import mobile_field_img from '../images/mobile_field_image.png'
import MobilePlayerCard from './MobilePlayerCard';

const ImageContainer = styled.div`
    background-color: #5A8124;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const FieldImage = styled.img`
    width: 95%;
    z-index: 1;
    position: relative;
`;

const CardContainer = styled.div`
    width: 80%;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    aspect-ratio: 3 / 4;
    top: ${(props) => {
        return (props.index > 3) ? props.index * 11 + 9 : props.index * 11 + 7
    }}%;
    z-index: 1;
`;



const Mobile = (props) => {
    return (
        <ImageContainer>

            <FieldImage src={mobile_field_img} />

            {props.articles.map((element, index) => (
                <CardContainer element={element} index={index}>
                    <MobilePlayerCard article={element} index={index}/>
                </CardContainer>
            ))}

        </ImageContainer>
    )
}

export default Mobile