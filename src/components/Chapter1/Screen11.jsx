import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Backward from "../Navigation/Backward"
import Forward from "../Navigation/Forward"
import Dijsktra from "../Playground/Dijkstra"
export default function Screen11(props){
  const {setChapterStage} = props;
  return(
    <Wrapper>
      <IntroText>
        Dijsktra
        <br />
        Uniform Cost Search
      </IntroText>
      <Grid container direction="row" justify="center">
        <Text>
          Maintain a priority queue
          <br />Process node with increasing weight
          <br />
          <br />
          <br />
          <br />Problem: The search expands in all direction
        </Text>
        <Dijsktra />
      </Grid>
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

const IntroText = styled.h1`
  text-align:center;
`
