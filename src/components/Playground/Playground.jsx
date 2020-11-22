import { useState } from "react";
import Board from "./Board";
import Tooltip from './Tooltip'
import styled from "styled-components"
export default function Playground(){
  const [boardSize,setBoardSize] = useState([15,15]);
  const [heuristic,setHeuristic] = useState("manhattan");
  const [start,setStart] = useState(false);
  return(
    <Wrapper>
      <Tooltip
        boardSize={boardSize} 
        setBoardSize={setBoardSize}
        heuristic={heuristic}
        setHeuristic={setHeuristic}
        start={start}
        setStart={setStart}

      />
      <StyledBoard
        start={start}
        setStart={setStart}
        boardSize={boardSize}
        heuristic={heuristic}
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
`
const StyledBoard = styled(Board)`
  width:521px;
  height:521px;
`