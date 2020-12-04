import { useState } from "react";
import Board from "./Board";
export default function Astar(){
  const [boardSize,] = useState([15,15]);
  const [algorithm,] = useState("astar");
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

