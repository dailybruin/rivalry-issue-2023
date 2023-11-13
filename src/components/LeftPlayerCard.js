import styled from 'styled-components'


const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    border: 10px solid red;
    display: flex;

    justify-content: flex-start;
    align-items: flex-start;
`

// const TextBox = styled.div`
//     position: relative;
//     height: 30%;
//     width: 60%;
//     border-radius: 40px;
//     padding: 5%;
//     right: 5%;
//     top: 45%;

//     border: 9px solid #F8CC46;
//     border-image: linear-gradient(to bottom, #F8CC46, #C99700) 1;
//     border-radius: 40px;

//     background: linear-gradient(to bottom, #3C74A9 20%, #4285C3 45%, #134C82 90%);

//     text-align: left;

//     font-family: 'Roboto Condensed';
//     font-size: 24px;
//     font-weight: 800;
//     color: white;
// `


const TextBox = styled.div`
    height: 35%;
    width: 70%;
    padding: 5%;
    right: 5%;
    top: 45%;

    --border-width: 10px;
    border-radius: 40px;

    background: linear-gradient(to bottom, #3C74A9 20%, #4285C3 45%, #134C82 90%);
    position: absolute;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;

    text-align: left;

    font-family: 'Roboto Condensed';
    font-size: 24px;
    font-weight: 800;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
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
    z-index:-1;
}
`




const PlayerCardContainer = styled.div`
  position: relative;
  width: 487px; /* Set the width you need */
  height: 532px; /* Set the height you need */
`;

const PlayerImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
`;



const PlayerCard = (props) => {
    const title = props.article.article_title;
    const url = props.article.article_url;
    const byline = props.article.article_byline;
    const image = props.article.article_image;
    const type = props.article.article_type;

    return (
        <CardContainer>
            <PlayerCardContainer>
                <PlayerImage src={image} alt="player image"/>
            </PlayerCardContainer>
            <TextBox>{title} {byline}</TextBox>
        </CardContainer>
  
    )
}

export default PlayerCard