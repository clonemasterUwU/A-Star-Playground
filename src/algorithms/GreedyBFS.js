import PriorityQueue from './PriorityQueue'
import {square4, pathTo} from './Neighbor'
import {mahattan} from './Astar'
const _reset=(board)=>{
  let start,end;
  for(let i=0;i<board.length;i++){
    for(let j=0;j<board[0].length;j++){
      board[i][j].f = 0;
      board[i][j].isWall = board[i][j].weight === 15;
      board[i][j].visited = false;
      board[i][j].parent = null;
      board[i][j].r = i;
      board[i][j].c = j;
      board[i][j].isPath = false;
      if(board[i][j].status===1) start=board[i][j];
      if(board[i][j].status===2) end=board[i][j];
    }
  }
  return {start,end};
};
const search=(board,heuristic=mahattan,neighbor=square4)=>{
  const newBoard = board.slice();
  const pq = new PriorityQueue((a,b)=>a.f<b.f);
  const {start,end} = _reset(newBoard);
  start.f=heuristic(start,end);
  pq.push({r:start.r,c:start.c,f:start.f});
  while(pq.size()>0){
    const {r,c,f} = pq.pop();
    console.log(r,c,f);
    const nextNode = newBoard[r][c]; // nextNode: {r,c,f}
    if(nextNode===end){
      pathTo(nextNode).forEach((node)=>node.isPath=true);
      return newBoard;
    } 
    nextNode.visited=true;
    neighbor(nextNode,newBoard).forEach((node)=>{
      if(!node.isWall && !node.visited){
        node.visited=true;
        node.f=heuristic(node,end);
        node.parent=nextNode;
        pq.push({r:node.r,c:node.c,f:node.f});
      }
    })
  }
  return newBoard;
}
export default search;