import styled from "styled-components"
import Backward from "../Navigation/Backward"
import Forward from "../Navigation/Forward"
export default function Screen00(props){
  const {setChapterStage} = props;
  return(
    <Wrapper>
      <Text>
      Movement for a single object seems easy.
      <br />Pathfinding is complex.
      <br />Why bother with pathfinding? 
      </Text>
      <Text>
        - Shortest path
        <br />- Time efficiency
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
`
const Text = styled.p`
  font-size:24px;
`


