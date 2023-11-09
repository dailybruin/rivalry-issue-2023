import styled from 'styled-components'
import field_img from "../images/field_rectangles.png"
import num_img from "../images/numbers.png"
import line_img from "../images/white_yard_lines.png"

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FieldImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`;

const LineImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  height: 100%;
`;

const NumImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  height: 100%;
`;


const Desktop = () => {
    return (
        <ImageContainer>
            <FieldImage
                src={field_img}
                // style={{ width: "100%", display: "block" }}
            />
            <NumImage
                src={num_img}
            />
            <LineImage
                src={line_img}
            />
        </ImageContainer>
    )
}

export default Desktop