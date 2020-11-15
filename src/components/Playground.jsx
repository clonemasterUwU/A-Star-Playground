import { useState } from "react";
import Board from "./Board";
import Tooltip from './Tooltip'

export default function Playground(){
  const [boardSize,setBoardSize] = useState([15,15]);
  const [heuristic,setHeuristic] = useState("manhattan");
  const [start,setStart] = useState(false);
  return(
    <>
    <Tooltip
      boardSize={boardSize} 
      setBoardSize={setBoardSize}
      heuristic={heuristic}
      setHeuristic={setHeuristic}
      start={start}
      setStart={setStart}

    />
    <Board
      start={start}
      setStart={setStart}
      boardSize={boardSize}
      heuristic={heuristic}
    />
    
    </>
  )
}