import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Backward from "../Navigation/Backward"
import Forward from "../Navigation/Forward"
export default function Screen11(props){
  const {setChapterStage} = props;
  return(
    <Wrapper>
      <IntroText>
        Dijsktra
        <br />
        Uniform Cost Search
      </IntroText>
      <Grid container direction="row">
        <Text>
          
        </Text>
      </Grid>
      <BottomGrid container justify="space-between" direction="row">
        <Backward onClick={()=>setChapterStage(1)}/>
        <Forward onClick={()=>setChapterStage(3)}/>
      </BottomGrid>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  align-items:center;
`
const Text = styled.p`
  font-size:24px;
  width:60%;
`
const BottomGrid = styled(Grid)`
  && {
    margin-top:auto;
    margin-bottom:72px;
  }
`

const IntroText = styled.h1`
  text-align:center;
`
