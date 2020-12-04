import {useEffect, useState} from 'react';
import Node from './Node';

import aStarSearch from '../../algorithms/Astar';
import dijkstraSearch from '../../algorithms/Dijkstra';
import "./Board.css";
export default function Board(props){
  const {boardSize,heuristic,start,setStart,algorithm} = props;
  const [board,setBoard] = useState([]);
  const [mousePress,setMousePress] =  useState(0);
  let [nodePress,setNodePress] = useState(null);
  useEffect(()=>{
    setBoard(gridGenerator(boardSize[0],boardSize[1]));
  },[boardSize]);
  useEffect(()=>{
    switch(algorithm){
      case "dijkstra":
        setBoard(defaultDijkstra(boardSize[0],boardSize[1]));
        setStart(true);
        break;
      default:
    }
  },[])
  useEffect(()=>{
    if(start){
      switch(algorithm){
        case "a*":
          setBoard(aStarSearch(board));
          break;
        case "dijkstra":
          setBoard(dijkstraSearch(board));
          break;
        default:
      }
      setStart(false);
    }
  },[start,board]);
  const rightClick=(event,row,col)=>{
    event.preventDefault();
    // setBoard(wallToggle(board,row,col));
  }
  const onMouseDown = (event,row, col) => {
    event.preventDefault();
    if(board[row][col].status!==0){//special node
      setNodePress ([row,col]);
      setMousePress(event.buttons);
    } else {
      switch(event.buttons){
        case 2://leftmouse press
          setMousePress(2);
          setBoard(wallToggle(board,row,col));
          break;
        case 1://rightmouse press
          setMousePress(1);
          setBoard(weightChange(board,row,col));
          break;
        default:
      }  
    }
    setStart(true);
      
  }

  const onMouseEnter = (event,row, col) => {
    event.preventDefault();
    if(nodePress!==null){ //special node
      if(board[row][col].status===0&&mousePress!==0){
        setBoard(moveSpecialNode(board,nodePress[0],nodePress[1],row,col));
        setNodePress([row,col]);
        setStart(true);
      }
    }else if (mousePress===2){
      setBoard(wallToggle(board,row,col));
      setStart(true);
    } else if(mousePress===1){
      setBoard(weightChange(board,row,col));
      setStart(true);
    }
  }

  const onMouseUp = (event) => {
    event.preventDefault();
    setMousePress(0);
    setNodePress(null);
  }

  return (
    <table>
    <tbody>
    {board.map((row,rid)=>{
      return (
        <tr key={rid} className="row">
          {row.map((node,nid)=>{
            return(
              <Node
                key={nid}
                nodeInfo={node}
                onRightClick={rightClick}
                onMouseDown={onMouseDown}
                onMouseEnter={onMouseEnter}
                onMouseUp={onMouseUp}
              />
            ) 
          })}
        </tr>
      )
    })
    }
    </tbody>
    </table>
  )
  
}

const moveSpecialNode = (board,prevRow,prevCol,newRow,newCol) => {
  const newBoard = board.slice();
  const status = board[prevRow][prevCol].status;
  newBoard[prevRow][prevCol] = {
    ...board[prevRow][prevCol],
    status:0,
  }
  newBoard[newRow][newCol] = {
    ...board[newRow][newCol],
    status:status,
  }
  return newBoard;
}
const gridGenerator = (row,col) => {
  const grid = [];
  for(let i=0;i<row;i++){
    const row = [];
    for(let j=0;j<col;j++){
      row.push(nodeGenerator(i,j));
    }
    grid.push(row);
  }
  grid[0][0].status=1;
  grid[grid.length-1][grid[0].length-1].status=2;
  return grid;
}
/*
node status:
0: normal
1: start
2: end
3: side-quest

*/
const nodeGenerator = (row,col) => {
  return {
    row,col,
    weight:1,
    status:0,
  }
}
const defaultDijkstra = (row,col) => {
  const grid = [];
  for(let i=0;i<row;i++){
    const row = [];
    for(let j=0;j<col;j++){
      row.push(nodeGenerator(i,j));
    }
    grid.push(row);
  }
  for(let i=2;i<8;i++) grid[6][i].weight=15;
  for(let i=6;i<13;i++) grid[i][8].weight=15;
  grid[10][4].status=1;
  grid[2][12].status=2;
  return grid;
}
const weightChange = (board,row,col) => {
  const newBoard = board.slice();
  const oldNode = newBoard[row][col];
  newBoard[row][col] = {
    ...oldNode,
    weight: (oldNode.weight+1)%16,
  }
  return newBoard;
}

const wallToggle = (board,row,col) => {
  const newBoard = board.slice();
  const oldNode = newBoard[row][col];
  newBoard[row][col] = {
    ...oldNode,
    weight:oldNode.weight===15?1:15,
  }
  return newBoard;
}

const getShortestPath = (board,start,end)=>{

}

