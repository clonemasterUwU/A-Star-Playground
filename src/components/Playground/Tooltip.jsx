import { Button } from '@material-ui/core';
import Slider from '@material-ui/core/Slider'
import styled  from 'styled-components';

export default function Tooltip(props){
  const {boardSize,setBoardSize,heuristic,setHeuristic,setStart} = props;
  return(
    <TooltipWrapper>
      <Row>
        Row   
        <RowSlider
        aria-label="Column"
        max={20}
        min={5}
        marks
        step={1}
        value={boardSize[0]}
        onChange={(event,value)=>setBoardSize([value,boardSize[1]])}
        valueLabelDisplay="auto"
        component="span"
        />
      </Row>
      <Row>
        Column
        <RowSlider
        aria-label="Column"
        max={20}
        min={5}
        marks
        step={1}
        value={boardSize[1]}
        onChange={(event,value)=>setBoardSize([boardSize[0],value])}
        valueLabelDisplay="auto"
        component="span"
        />
      </Row>
    <Button variant="contained" onClick={()=>setStart(true)}>Start</Button>
    <Button variant="contained" onClick={()=>setBoardSize([...boardSize])}>Reset</Button>

    </TooltipWrapper>
  )
}
const TooltipWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:521px;
`
const Row = styled.div`

  display:flex;
  justify-content:space-between;
`
const RowSlider = styled(Slider)`
  &&{
    width: 300px;
  }
`
