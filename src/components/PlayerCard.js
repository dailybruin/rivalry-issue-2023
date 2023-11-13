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
    --border-width: 10px;
    --border-radius: 25px;
    border-radius: var(--border-radius);

    background: linear-gradient(to bottom, #3C74A9 20%, #4285C3 45%, #134C82 90%);
    position: absolute;
    text-align: center;
    padding: 4%;
    box-sizing: border-box;

    text-align: left;

    font-family: 'Roboto Condensed';
    font-size: 24px;
    font-weight: 900;
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
    height: 90%;
    width: 40%;
    /* border: 5px blue solid; */
`

///////////////////////
// Left
///////////////////////

const LeftPlayerCard = (props) => {
    const title = props.article.article_title;
    const url = props.article.article_url;
    const byline = props.article.article_byline;

    return (
        <CardContainer>
            <PlayerContainer style={{ left: '5%' }}>
                <PlayerImage src={players[props.index]} />
            </PlayerContainer>
            <TextContainer style={{ height: '30%', width: '62%', left: '28%', top: '40%' }}>
                <a href={url}>
                    <TextBox style={{ paddingLeft: '22%' }} href={url}>{title} {byline}</TextBox>
                </a>
            </TextContainer>
        </CardContainer>
    )
}

///////////////////////
// Right
///////////////////////

const RightPlayerCard = (props) => {
    const title = props.article.article_title;
    const url = props.article.article_url;
    const byline = props.article.article_byline;

    return (
        <CardContainer>
            <PlayerContainer style={{ left: '60%' }}>
                <PlayerImage src={players[props.index]} />
            </PlayerContainer>
            <TextContainer style={{ height: '30%', width: '62%', left: '15%', top: '30%' }}>
                <a href={url}>
                    <TextBox style={{ paddingRight: '15%' }} href={url}>{title} {byline}</TextBox>
                </a>
            </TextContainer>
        </CardContainer>
    )
}

///////////////////////
// First
///////////////////////

const FirstPlayerCard = (props) => {
    const title = props.article.article_title;
    const url = props.article.article_url;
    const byline = props.article.article_byline;

    return (
        <CardContainer>
            <PlayerContainer style={{ left: '50%', height: '85%', bottom: '15%' }}>
                <PlayerImage src={players[props.index]} />
            </PlayerContainer>
            <TextContainer style={{ height: '30%', width: '70%', left: '10%', top: '30%' }}>
                <a href={url}>
                    <TextBox style={{ paddingRight: '20%' }}>{title} {byline}</TextBox>
                </a>
            </TextContainer>
        </CardContainer>
    )
}

///////////////////////
// Second
///////////////////////

const SecondPlayerCard = (props) => {
    const title = props.article.article_title;
    const url = props.article.article_url;
    const byline = props.article.article_byline;

    return (
        <CardContainer>
            <PlayerContainer style={{ left: '5%', height: '80%', bottom: '0%' }}>
                <PlayerImage src={players[props.index]} />
            </PlayerContainer>
            <TextContainer style={{ height: '30%', width: '60%', left: '30%', top: '35%' }}>
                <a href={url}>
                    <TextBox style={{ paddingLeft: '20%' }}>{title} {byline}</TextBox>
                </a>
            </TextContainer>
        </CardContainer>
    )
}

export { LeftPlayerCard, RightPlayerCard, FirstPlayerCard, SecondPlayerCard };