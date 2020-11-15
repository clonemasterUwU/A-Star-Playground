import {square4,pathTo} from './Neighbor'
const _reset = (board)=>{
  let start,end;
  for(let i=0;i<board.length;i++){
    for(let j=0;j<board[0].length;j++){
      board.visited = false;
      board[i][j].isWall = board[i][j].weight === 15;
      board[i][j].parent = null;
      board[i][j].r = i;
      board[i][j].c = j;
      board[i][j].isPath = false;
      if(board[i][j].status===1) start=board[i][j];
      if(board[i][j].status===2) end=board[i][j];
    }
  }
  return {start,end};
}
const breadFirstSearch = (board,neighbor=square4)=>{
  const q = [];
  const newBoard = board.slice();
  const {start,end} = _reset(newBoard);
  q.push(start);
  start.visited = true;
  while(q.length!==0){
    const current = q.shift();
    const neighbors = square4(current,board);
    for(let i=0;i<neighbors.length;i++){
      if(!neighbors[i].visited){
        neighbors[i].visited=true;
        neighbors[i].parent = current;
        q.push(neighbors[i]);
      }
    }
    if(current===end){
      const path = pathTo(end);
      for(let i=0;i<path.length;i++){
        path[i].isPath=true;
      }
      return newBoard;
    }
  }
}