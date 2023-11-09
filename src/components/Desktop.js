import styled from 'styled-components'
import field_img from "../images/field_image.png"

const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5A8124;
`;

const FieldImage = styled.img`
    position: relative;
    width: 95%;
`;

// const CardContainer = styled.div`
//     poition: absolute;
//     width: 20%;
//     boarder: 10px solid red;
// `;



const Desktop = () => {
    console.log(FieldImage.height)

    return (
        <ImageContainer>
            <FieldImage
                src={field_img}
            />
        </ImageContainer>
    )
}

export default Desktop