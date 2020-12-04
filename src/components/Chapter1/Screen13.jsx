import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Backward from "../Navigation/Backward"
import Forward from "../Navigation/Forward"
import Astar from "../Playground/Astar"
export default function Screen11(props){
  const {setChapterStage} = props;
  return(
    <Wrapper>
      <IntroText>
        A *
      </IntroText>
      <Grid container direction="row" justify="center">
        <Text>
          A* is the combination the best of those two pathfinding algorithms: 
          <br />prioritize path towards endpoints + 
          guarantee shortest path
          <br />
          <br />Maintain a priority queue
          <br />Process node with combination of weight and heuristic
          <br />f(x) = g(x) + h(x)
          <br />
          <br />g(x) is the cost to reach x from start 
          <br />h(x) is the estimated distance between x and end
        </Text>
        <Astar />
      </Grid>
      <BottomGrid container justify="space-between" direction="row">
        <Backward onClick={()=>setChapterStage(2)}/>
        <Forward onClick={()=>setChapterStage(4)}/>
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
