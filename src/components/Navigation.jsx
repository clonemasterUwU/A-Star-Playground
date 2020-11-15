
/*
<StyledNavigation value={stage} onChange={(event,value)=>setStage(value)}>
      <BottomNavigationAction label="Recents" value={0}  icon={<RestoreIcon />}/>
      <BottomNavigationAction label="Favorites" value={1} icon={<RestoreIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby"  />
      <BottomNavigationAction label="Folder" value="folder" />
    </StyledNavigation>
*/

import Tooltip from "@material-ui/core/Tooltip";
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components'

export default function Navigation(props){
  const {stage,setStage} = props;
  return (
    <StyleDiv>
      <StyledTooltip title="Chapter 0: Introduction" onClick={()=>setStage(0)}>
        <Fab color="primary" size="small">
          0
        </Fab>
      </StyledTooltip>
      <StyledTooltip title="Chapter 1: Pathfinding Algorithm" onClick={()=>setStage(1)}>
        <Fab color="primary" size="small">
          1
        </Fab>
      </StyledTooltip>
      <StyledTooltip title="Chapter 2: Heuristic" onClick={()=>setStage(2)}>
        <Fab color="primary" size="small">
          2
        </Fab>
      </StyledTooltip>
      <StyledTooltip title="Chapter 3: Breaking tie" onClick={()=>setStage(3)}>
        <Fab color="primary" size="small">
          3
        </Fab>
      </StyledTooltip>
      <StyledTooltip title="Chapter 4: Playground" onClick={()=>setStage(4)}>
        <Fab color="primary" size="small">
          4
        </Fab>
      </StyledTooltip>
    </StyleDiv>
  )
}
const StyledTooltip = styled(Tooltip)`
  && {
    margin: 8px;
  }
`
const StyleFab = styled(Fab)`
`
const StyleDiv  = styled.div`
  width:100%;
  padding:12px;
  background:#333;
  position:absolute;
  bottom:0;
  justify-content:center;
  display:flex;
`