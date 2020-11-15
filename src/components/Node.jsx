
import styled  from 'styled-components';

export default function Node(props){
  const { onRightClick,nodeInfo:{row,col,status,weight,isPath}, onMouseUp, onMouseDown, onMouseEnter } = props;
return(
  <StyleNode
    row={row}
    col={col}
    weight={weight}
    status={status}
    isPath={isPath}
    onContextMenu = {(event)=>onRightClick(event,row,col)} 
    onMouseDown={(event)=>onMouseDown(event,row,col)}
    onMouseUp={(event)=>onMouseUp(event,row,col)}
    onMouseEnter={(event)=>onMouseEnter(event,row,col)}
  />
    
)
}
const StyleNode = styled.td`
  width: 25px;
  height: 25px;
  border: 1px solid rgb(175, 216, 248);  
  background-color: ${props=>props.status===1?`rgb(248, 131, 131)`
                            :props.status===2?`rgb(129, 127, 252)`
                            :props.isPath===true?`rgb(219, 241, 70)`
                            :props.status===0?`hsl(0,0%,${(15-props.weight)*100/16}%)`
                            :""};
`;
