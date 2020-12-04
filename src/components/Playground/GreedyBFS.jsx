import { useState } from "react";
import Board from "./Board";
export default function GreedyBFS(){
  const [boardSize,] = useState([15,15]);
  const [algorithm,] = useState("greedybfs");
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

