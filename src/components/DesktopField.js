import styled from 'styled-components'
import field_img from "../images/field_image.png"
import { LeftPlayerCard, RightPlayerCard, FirstPlayerCard, SecondPlayerCard } from './PlayerCard';

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
    width: 55%;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    aspect-ratio: 4 / 3;
    left: ${(props) => (props.index % 2) ? 40 : 5}%;
    top: ${(props) => ((props.index > 3) ? props.index * 8.5 + 18 : props.index * 10 + 5)}%;
    z-index: 1;
`;



const Desktop = (props) => {
    return (
        <ImageContainer>

            <FieldImage src={field_img} />

            {props.articles.map((element, index) => (
                <CardContainer element={element} index={index}>
                    {
                        index == 0 ? <FirstPlayerCard article={element} index={index} /> :
                            (index == 1 ? <SecondPlayerCard article={element} index={index} /> :
                                (index % 2 == 0 ?
                                    <LeftPlayerCard article={element} index={index} /> :
                                    <RightPlayerCard article={element} index={index} />
                                )
                            )
                    }
                </CardContainer>
            ))}

        </ImageContainer>
    )
}

export default Desktop