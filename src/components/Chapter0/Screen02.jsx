import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Backward from "../Navigation/Backward"
import Forward from "../Navigation/Forward"
export default function Screen00(props){
  const {setChapterStage} = props;
  return(
    <Wrapper>
      <Text>
        Pathfinding algorithms works with Graph
        <br />an abstract mathematic definition
        <br />contains vertices (location) and edges (connections)
      </Text>
      <Text>
        For simplicity and visualization purpose, Grid is used
        <br />Playground is interactive:
        <br />- Nodes can be dragged around
        <br />- Leftclick/press to add weight
        <br />- Rightclick/press to toggle wall
      </Text>
      <Text>
        Board example placeholder
        <br />Map representation placeholder
      </Text>
      <BottomGrid container justify="space-between" direction="row">
        <Backward onClick={()=>setChapterStage(1)}/>
        <Forward onClick={()=>setChapterStage(3)}/>
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


