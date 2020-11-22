import {useState} from 'react'
import styled from 'styled-components'
import Playground from './Playground'
import Chapter0 from './Chapter0/Chapter0'
import Stage31 from './Stage31'
import Navigation from './Navigation/Navigation'
export default function Main() {
  const [stage,setStage] = useState(0);
  return (
    <FontFormat>
    {
      stage===0?<Chapter0 />
      :stage===1?<Stage31 />
      :stage===4?<Playground />
      :null
    }
    <Navigation setStage={setStage}  stage={stage}/>
    </FontFormat>

  );
}
const FontFormat = styled.div`
  font-size:20px;
  display:flex;
  justify-content:center;
  font-family:'Futura Handwritten';
`

