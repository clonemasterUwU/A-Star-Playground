import PriorityQueue from './PriorityQueue'
import {square4, pathTo} from './Neighbor'
const _reset = (board)=>{
  let start,end;
  for(let i=0;i<board.length;i++){
    for(let j=0;j<board[0].length;j++){
      board[i][j].visited = false;
      board[i][j].closed = false;
      board[i][j].isWall = board[i][j].weight === 15;
      board[i][j].parent = null;
      board[i][j].f = 0;
      board[i][j].r = i;
      board[i][j].c = j;
      board[i][j].isPath = false;
      if(board[i][j].status===1) start=board[i][j];
      if(board[i][j].status===2) end=board[i][j];
    }
  }
  return {start,end};
}

const search = (board,neighbor=square4)=>{
  const pq = new PriorityQueue((a,b)=>a.f<b.f);
  const newBoard = board.slice();
  const {start,end} = _reset(newBoard);
  pq.push(start);
  while(!pq.isEmpty){
    const {r,c,f} = pq.pop();
    const current = newBoard[r][c];
    if(current===end){
      pathTo(current).forEach((node)=>node.isPath=true);
      return newBoard;
    }
    if(!current.closed){
      current.closed = true;
      neighbor(current,newBoard).forEach((node)=>{
        if(!node.closed&&!node.isWall){
          if(node.visited&&f+node.weight<node.f){
            node.parent = current;
            node.f = f + node.weight;
            pq.push({r:node.r,c:node.c,f:node.f});
          } else if(!node.visited){
            node.parent = current;
            node.f = f + node.weight;
            node.visited = true;
            pq.push({r:node.r,c:node.c,f:node.f});
          }
        }
      })
    }
  }
  return newBoard;
}