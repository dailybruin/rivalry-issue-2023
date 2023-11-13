import styled from 'styled-components'
import players from '../images/players/index'


const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    /* border: 10px solid red; */

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`

const TextBox = styled.div`
    height: 100%;
    width: 100%;
    --border-width: 5px;
    --border-radius: 25px;
    border-radius: var(--border-radius);

    background: linear-gradient(to bottom, #3C74A9 20%, #4285C3 45%, #134C82 90%);
    position: absolute;
    text-align: center;
    padding: 4%;
    box-sizing: border-box;

    text-align: left;

    font-family: 'Roboto Condensed';
    font-size: 14px;
    font-weight: 700;
    color: white;

    &::before {
        border-radius: calc(var(--border-radius) + var(--border-width));
        content: '';
        background-image: linear-gradient(to bottom, #F8CC46, #C99700);
        top: calc(0px - var(--border-width));
        left: calc(0px - var(--border-width));
        bottom: calc(0px - var(--border-width));
        right: calc(0px - var(--border-width));
        position: absolute;
        z-index: -1;
    }
`

const PlayerImage = styled.img`
    height: 100%;
    z-index: 2;
    position: relative;
`;

const TextContainer = styled.div`
    position: relative;
    /* border: 5px green solid; */
`

const PlayerContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 50%;
    /* border: 5px blue solid; */
`

///////////////////////
// Mobile
///////////////////////

const MobilePlayerCard = (props) => {
    const title = props.article.article_title;
    const url = props.article.article_url;
    const byline = props.article.article_byline;

    return (
        <CardContainer>
            <PlayerContainer style={{ left: '5%', height: '80%', bottom: '0%' }}>
                <PlayerImage src={players[props.index]} />
            </PlayerContainer>
            <TextContainer style={{ height: '80%', width: '60%', left: '30%', top: '35%' }}>
                <a href={url}>
                    <TextBox style={{ paddingLeft: '20%' }}><b>{title} {byline}</b></TextBox>
                </a>
            </TextContainer>
        </CardContainer>
    )
}

export default MobilePlayerCard;