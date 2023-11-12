import styled from 'styled-components'
import players from '../images/players/index'

const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    border: 10px solid red;
    display: flex;

    justify-content: flex-start;
    align-items: flex-start;
`

const TextBox = styled.div`
    height: 30%;
    width: 70%;
    left: 30%;
    top: 40%;

    --border-width: 10px;
    border-radius: 40px;

    background: linear-gradient(to bottom, #3C74A9 20%, #4285C3 45%, #134C82 90%);
    position: relative;
    text-align: center;
    padding: 4%;
    padding-left: 13%;
    box-sizing: border-box;

    text-align: left;

    font-family: 'Roboto Condensed';
    font-size: 24px;
    font-weight: 800;
    color: white;
}
&::before {
    border-radius: 50px;
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

const PlayerContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 40%;
    border: 5px blue solid;
    left: 0;
`

const PlayerImage = styled.img`
    height: 100%;
    z-index: 2;
    position: relative;
`;

const PlayerCard = (props) => {
    const title = props.article.article_title;
    const url = props.article.article_url;
    const byline = props.article.article_byline;
    const image = props.article.article_image;
    const type = props.article.article_type;

    return (
        <CardContainer>
            <PlayerContainer>
                <PlayerImage src={players[props.index]}/>
            </PlayerContainer>
            <TextBox>{title} {byline}</TextBox>
        </CardContainer>
    )
}

export default PlayerCard