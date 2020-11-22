import styled from "styled-components"
import Button from "@material-ui/core/Button"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Screen00(props){
  const {setChapterStage} = props;
  return(
    <Wrapper>
      <IntroText>
        A star
        <br />
        PLAYGROUND
      </IntroText>
      <StyledButton onClick={()=>setChapterStage(1)}>
        Start
        <KeyboardArrowRightIcon fontSize="small" />
      </StyledButton>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
`
const IntroText = styled.h1`
  text-align:center;
`
const StyledButton = styled(Button)`
  width:300px;
`