import styled from 'styled-components'

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
    top: ${(props) => ((props.index > 3) ? props.index * 9 + 17 : props.index * 9 + 10)}%;
    z-index: 1;
`;



const Mobile = (props) => {
    // const articles = props.articles;
    const articles = [1,2,3,4,5,6,7,8];

    return (
        <ImageContainer>

            <h1>TODO: Mobile Version</h1>

        </ImageContainer>
    )
}

export default Mobile