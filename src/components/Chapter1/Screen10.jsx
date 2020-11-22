import styled from "styled-components"
import Forward from "../Navigation/Forward"
export default function Screen10(props){
  const {setChapterStage} = props;
  return(
    <Wrapper>
      <IntroText>
        Chapter 1:
        <br />
        Pathfinding algorithms
      </IntroText>
      <Text>
        This chapter covers basic algorithms for pathfinding:
        <br />- Dijkstra
        <br />- Heuristic
        <br />- A*
      </Text>
      <Text>
        Assumption:
        <br />- Each node on the grid has a positive weight represent the cost to move through it
        <br />- The goal is to find the smallest cost path
      </Text>
        <Forward onClick={()=>setChapterStage(1)}/>
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
const IntroText = styled.h1`
  text-align:center;
`
