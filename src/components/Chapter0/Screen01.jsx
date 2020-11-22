import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
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
      <BottomGrid container justify="space-between" direction="row">
        <Backward onClick={()=>setChapterStage(0)}/>
        <Forward onClick={()=>setChapterStage(2)}/>
      </BottomGrid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  align-items:center;
`
const Text = styled.p`
  font-size:24px;
  width:60%;
`
const BottomGrid = styled(Grid)`
  && {
    margin-top:auto;
    margin-bottom:72px;
  }
`


