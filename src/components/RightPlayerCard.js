import styled from 'styled-components'

const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    border: 10px solid red;
    display: flex;

    justify-content: flex-end;
    align-items: flex-end;
`

const TextBox = styled.div`
    position: relative;
    height: 30%;
    width: 50%;
    padding: 5%;
    right: 5%;

    border: 10px solid #F8CC46;
    border-radius: 40px;

    background: linear-gradient(to bottom, #3C74A9 20%, #4285C3 45%, #134C82 90%);
    text-align: left;

    font-family: 'Roboto Condensed';
    font-size: 24px;
    font-weight: 800;
    color: white;

    background-clip: padding-box;
    
`

const PlayerCard = (props) => {
    const title = props.article.article_title;
    const url = props.article.article_url;
    const byline = props.article.article_byline;
    const image = props.article.article_image;
    const type = props.article.article_type;

    return (
        <CardContainer>
            <TextBox>{title} {byline}</TextBox>
        </CardContainer>
    )
}

export default PlayerCard