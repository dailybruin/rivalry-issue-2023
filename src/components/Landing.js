import styled from 'styled-components'

import DBLogo from '../images/DailyBruinLogo.svg'
import { colors } from '../shared/config'
import GIF from '../images/giphy.gif'

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  background: #D9D9D9;
  border-bottom: #D9D9D9;
`;

const Illo = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const Credits=styled("div")`
    background: #5A8124;

    div {
      color: white;
      margin-right: 1em;
      font-size: 17px;
      text-align: right;
      font-family: 'Inria Serif', serif;
    }
`;

const Landing = (props) => {
  return (
    <Container>
      <Illo src={GIF}></Illo>
      <Credits>
        <div>{props.data.landing_credits}</div>
      </Credits>
    </Container>
  )
}

export default Landing;