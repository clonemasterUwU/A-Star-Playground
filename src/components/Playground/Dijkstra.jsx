import { useState } from "react";
import Board from "./Board";
import styled from "styled-components"
export default function Dikstra(){
  const [boardSize,setBoardSize] = useState([15,15]);
  const [algorithm,setAlgorithm] = useState("dijkstra");
  const [start,setStart] = useState(false);
  return(
    
      <Board
        start={start}
        setStart={setStart}
        boardSize={boardSize}
        heuristic="manhattan"
        algorithm={algorithm}
      />
    
  )
}

