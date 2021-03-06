import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Backward from "../Navigation/Backward"
import Forward from "../Navigation/Forward"
import GreedyBFS from "../Playground/GreedyBFS"
export default function Screen11(props){
  const {setChapterStage} = props;
  return(
    <Wrapper>
      <IntroText>
        Heuristic
        <br />
        Greedy Best First Search
      </IntroText>
      <Grid container direction="row" justify="center">
        <Text>
          Maintain a priority queue
          <br />Process node with minimize heuristic 
          <br />(estimated distance between node and endpoint)
          <br />
          <br />
          <br />Problem: The search gives wrong results when "trap"
          <br />(as shown in the playground)
        </Text>
        <GreedyBFS />
      </Grid>
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

const IntroText = styled.h1`
  text-align:center;
`
