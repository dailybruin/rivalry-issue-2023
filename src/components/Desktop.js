import styled from 'styled-components'
import field_img from "../images/field_image.png"

const ImageContainer = styled.div`
    background-color: #5A8124;
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
    width: 40%;
    border: 20px solid red;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    aspect-ratio: 14 / 9;
    left: ${(props) => (props.index % 2) ? 55 : 5}%;
    top: ${(props) => ((props.index > 3) ? props.index * 9 + 18 : props.index * 9 + 10)}%; /* Adjust to your desired vertical position */
    z-index: 1;
`;



const Desktop = (props) => {

    const articles = [1,2,3,4,5,6,7,8];

    return (
        <ImageContainer>

            <FieldImage
                src={field_img}
            />

            {articles.map((element, index) => (
                <CardContainer element={element} index={index}>
                    <h2>pass article cards components in {'{element}'}</h2>
                </CardContainer>
            ))}

        </ImageContainer>
    )
}

export default Desktop