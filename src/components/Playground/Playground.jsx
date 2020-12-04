import { useState } from "react";
import Board from "./Board";
import Tooltip from './Tooltip'
import styled from "styled-components"
export default function Playground(){
  const [boardSize,setBoardSize] = useState([15,15]);
  const [heuristic,setHeuristic] = useState("manhattan");
  const [algorithm,setAlgorithm] = useState("a*");
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
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
      />
      <StyledBoard
        start={start}
        setStart={setStart}
        boardSize={boardSize}
        heuristic={heuristic}
        algorithm={algorithm}
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