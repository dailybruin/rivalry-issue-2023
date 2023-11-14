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
    font-size: 17px;
    font-weight: 700;
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

    var idx = props.index;

    switch (idx) {
        case 0:
            return (
                <CardContainer>
                    <PlayerContainer style={{ left: '23%', height: '85%', bottom: '36%' }}>
                        <PlayerImage src={players[props.index]} />
                    </PlayerContainer>
                    <TextContainer style={{ height: '30%', width: '92%', left: '4%', top: '57%' }}>
                        <a href={url}>
                            <TextBox style={{ paddingLeft: '5%', paddingTop: '10%' }}><b>{title} {byline}</b></TextBox>
                        </a>
                    </TextContainer>
                </CardContainer>
            )
        case 1: 
            return (
                <CardContainer>
                    <PlayerContainer style={{ right: '66%', height: '75%', top: '38%' }}>
                        <PlayerImage src={players[props.index]} />
                    </PlayerContainer>
                    <TextContainer style={{ height: '30%', width: '85%', left: '23%', top: '40%' }}>
                        <a href={url}>
                            <TextBox style={{ paddingLeft: '23%' }}><b>{title} {byline}</b></TextBox>
                        </a>
                    </TextContainer>
                </CardContainer>
            )
        case 2:
            return (
                <CardContainer>
                    <PlayerContainer style={{ right: '73%', height: '85%', top: '0%' }}>
                        <PlayerImage src={players[props.index]} />
                    </PlayerContainer>
                    <TextContainer style={{ height: '35%', width: '85%', left: '18%', top: '30%' }}>
                        <a href={url}>
                            <TextBox style={{ paddingLeft: '20%' }}><b>{title} {byline}</b></TextBox>
                        </a>
                    </TextContainer>
                </CardContainer>
            )
        case 3:
            return (
                <CardContainer>
                    <PlayerContainer style={{ left: '37%', height: '100%', bottom: '0%' }}>
                        <PlayerImage src={players[props.index]} />
                    </PlayerContainer>
                    <TextContainer style={{ height: '48%', width: '85%', right: '7%', top: '17%' }}>
                        <a href={url}>
                            <TextBox style={{ paddingLeft: '7%' , paddingRight: '30%', paddingTop: '7%'}}><b>{title} {byline}</b></TextBox>
                        </a>
                    </TextContainer>
                </CardContainer>
            )
        case 4:
            return (
                <CardContainer>
                    <PlayerContainer style={{ right: '68%', height: '105%', top: '2%' }}>
                        <PlayerImage src={players[props.index]} />
                    </PlayerContainer>
                    <TextContainer style={{ height: '48%', width: '65%', left: '41%', top: '45%' }}>
                        <a href={url}>
                            <TextBox style={{ paddingLeft: '20%' , paddingTop: '7%'}}><b>{title} {byline}</b></TextBox>
                        </a>
                    </TextContainer>
                </CardContainer>
            )
        case 5:
            return (
                <CardContainer>
                    <PlayerContainer style={{ left: '39%', height: '105%', top: '2%' }}>
                        <PlayerImage src={players[props.index]} />
                    </PlayerContainer>
                    <TextContainer style={{ height: '48%', width: '77%', right: '7%', top: '47%' }}>
                        <a href={url}>
                            <TextBox style={{ paddingLeft: '7%' , paddingRight: '30%', paddingTop: '7%'}}><b>{title} {byline}</b></TextBox>
                        </a>
                    </TextContainer>
                </CardContainer>
            )
        case 6:
            return (
                <CardContainer>
                    <PlayerContainer style={{ right: '72%', height: '93%', top: '39%' }}>
                        <PlayerImage src={players[props.index]} />
                    </PlayerContainer>
                    <TextContainer style={{ height: '48%', width: '61%', left: '44%', top: '78%' }}>
                        <a href={url}>
                            <TextBox style={{ paddingLeft: '15%' , paddingTop: '7%'}}><b>{title} {byline}</b></TextBox>
                        </a>
                    </TextContainer>
                </CardContainer>
            )
        case 7:
            return (
                <CardContainer>
                    <PlayerContainer style={{ left: '38%', height: '95%', top: '30%' }}>
                        <PlayerImage src={players[props.index]} />
                    </PlayerContainer>
                    <TextContainer style={{ height: '40%', width: '73%', right: '7%', top: '64%' }}>
                        <a href={url}>
                            <TextBox style={{ paddingLeft: '7%' , paddingTop: '7%'}}><b>{title} {byline}</b></TextBox>
                        </a>
                    </TextContainer>
                </CardContainer>
            )
        default:
            return (
                <CardContainer>
                    <PlayerContainer style={{ left: '5%', height: '90%', bottom: '20%' }}>
                        <PlayerImage src={players[props.index]} />
                    </PlayerContainer>
                    <TextContainer style={{ height: '30%', width: '92%', left: '4%', top: '60%' }}>
                        <a href={url}>
                            <TextBox style={{ paddingLeft: '20%' }}><b>{title} {byline}</b></TextBox>
                        </a>
                    </TextContainer>
                </CardContainer>
            )
    }
}

export default MobilePlayerCard;