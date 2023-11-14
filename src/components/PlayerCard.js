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
    --border-width: 0.8vw;
    --border-radius: 2.5vw;
    border-radius: var(--border-radius);

    background: linear-gradient(to bottom, #3C74A9 20%, #4285C3 45%, #134C82 90%);
    position: absolute;
    text-align: center;
    padding: 4%;
    box-sizing: border-box;

    text-align: left;

    font-family: 'Roboto Condensed';
    font-size: 1.7vw;
    font-weight: 900;
    color: white;

    &::before {
        border-radius: calc(var(--border-radius) + var(--border-width));
        content: '';
        background-image: linear-gradient(to bottom, #F8CC46, #C99700);
        top: calc(0vw - var(--border-width));
        left: calc(0vw - var(--border-width));
        bottom: calc(0vw - var(--border-width));
        right: calc(0vw - var(--border-width));
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

const LeftPlayerCard = (props) => {
    const title = props.article.article_title;
    const url = props.article.article_url;
    const byline = props.article.article_byline;
    const author = props.article.article_author;

    return (
        <CardContainer>
            <PlayerContainer style={{ left: '5%' }}>
                <PlayerImage src={players[props.index]} />
            </PlayerContainer>
            <TextContainer style={{ height: '30%', width: '62%', left: '28%', top: '40%' }}>
                <a href={url}>
                    <TextBox style={{ paddingLeft: '22%' }}>
                        <div style={{ maxHeight: '80%', overflow: 'hidden' }}>{title} {byline}</div>
                        {author.length > 0 ? <div style={{ marginTop: '2%', fontWeight: '300' }}>{"By " + author}</div> : null}
                    </TextBox>
                </a>
            </TextContainer>
        </CardContainer>
    )
}

const RightPlayerCard = (props) => {
    const title = props.article.article_title;
    const url = props.article.article_url;
    const byline = props.article.article_byline;
    const author = props.article.article_author;

    return (
        <CardContainer>
            <PlayerContainer style={{ left: '60%' }}>
                <PlayerImage src={players[props.index]} />
            </PlayerContainer>
            <TextContainer style={{ height: '30%', width: '62%', left: '15%', top: '30%' }}>
                <a href={url}>
                    <TextBox style={{ paddingRight: '15%' }}>
                        <div style={{ maxHeight: '80%', overflow: 'hidden' }}>{title} {byline}</div>
                        {author.length > 0 ? <div style={{ marginTop: '2%', fontWeight: '300' }}>{"By " + author}</div> : null}
                    </TextBox>
                </a>
            </TextContainer>
        </CardContainer>
    )
}

const FirstPlayerCard = (props) => {
    const title = props.article.article_title;
    const url = props.article.article_url;
    const byline = props.article.article_byline;
    const author = props.article.article_author;

    return (
        <CardContainer>
            <PlayerContainer style={{ left: '50%', height: '85%', bottom: '15%' }}>
                <PlayerImage src={players[props.index]} />
            </PlayerContainer>
            <TextContainer style={{ height: '30%', width: '70%', left: '10%', top: '30%' }}>
                <a href={url}>
                    <TextBox style={{ paddingRight: '20%' }}>
                        <div style={{ maxHeight: '80%', overflow: 'hidden' }}>{title} {byline}</div>
                        {author.length > 0 ? <div style={{ marginTop: '2%', fontWeight: '300' }}>{"By " + author}</div> : null}
                    </TextBox>
                    
                </a>
            </TextContainer>
        </CardContainer>
    )
}

const SecondPlayerCard = (props) => {
    const title = props.article.article_title;
    const url = props.article.article_url;
    const byline = props.article.article_byline;
    const author = props.article.article_author;

    return (
        <CardContainer>
            <PlayerContainer style={{ left: '5%', height: '80%', bottom: '0%' }}>
                <PlayerImage src={players[props.index]} />
            </PlayerContainer>
            <TextContainer style={{ height: '30%', width: '60%', left: '30%', top: '35%' }}>
                <a href={url}>
                    <TextBox style={{ paddingLeft: '20%' }}>
                        <div style={{ maxHeight: '80%', overflow: 'hidden' }}>{title} {byline}</div>
                        {author.length > 0 ? <div style={{ marginTop: '2%', fontWeight: '300' }}>{"By " + author}</div> : null}
                    </TextBox>
                </a>
            </TextContainer>
        </CardContainer>
    )
}

export { LeftPlayerCard, RightPlayerCard, FirstPlayerCard, SecondPlayerCard };