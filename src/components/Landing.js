import styled from 'styled-components'

import DBLogo from '../images/DailyBruinLogo.svg'
import { colors } from '../shared/config'

const Credits=styled("div")`
    background: #5A8124;

    h1 {
      color: white;
      margin: 0;
      font-size: 15px;
      text-align: right;
      margin-right: 300px;
      font-family: 'Inria Serif', serif;
    }
`;

const Landing = (props) => {
  return (
    <div>
      <Credits>
      <img src={props.landing_image}></img>
        <h1>{props.landing_credits}</h1>
      </Credits>
    </div>
  )
}

export default Landing;