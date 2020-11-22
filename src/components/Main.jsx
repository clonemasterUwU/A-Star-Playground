import {useState} from 'react'
import styled from 'styled-components'
import Playground from './Playground/Playground'
import Chapter0 from './Chapter0/Chapter0'
import Chapter1 from './Chapter1/Chapter1'
import Navigation from './Navigation/Navigation'
export default function Main() {
  const [stage,setStage] = useState(0);
  return (
    <FontFormat>
    {
      stage===0?<Chapter0 setStage={setStage}/>
      :stage===1?<Chapter1 setStage={setStage}/>
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

