import styled from 'styled-components'

import DBLogo from '../images/DailyBruinLogo.svg'
import { colors } from '../shared/config'

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  background: #D9D9D9;
  border-bottom: #D9D9D9;
`;

const Illo = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;

const Credits=styled("div")`
    background: #5A8124;

    h1 {
      color: white;
      margin: 0;
      font-size: 15px;
      text-align: right;
      font-family: 'Inria Serif', serif;
    }
`;

const Landing = (props) => {
  return (
    <Container>
      <Illo src={props.data.landing_image}></Illo>
      <Credits>
        <h1>{props.data.landing_credits}</h1>
      </Credits>
    </Container>
  )
}

export default Landing;