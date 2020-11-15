
const d4 = [-1,0,1,0,-1];
const square4 = (node,board)=>{
  const res = [];
  for(let i=0;i<4;i++){
    const dr = node.r + d4[i];
    const dc = node.c + d4[i+1];
    if(dr>=0&&dc>=0&&dr<board.length&&dc<board[0].length) res.push(board[dr][dc]);
  }
  return res;
}
const pathTo = (node) => {
  let curr = node;
  const path = [];
  while (curr.parent!==null) {
    path.unshift(curr);
    curr = curr.parent;
  }
  return path;
}
export { square4, pathTo }