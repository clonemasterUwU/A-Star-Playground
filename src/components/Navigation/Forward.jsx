import styled from "styled-components"
import Button from "@material-ui/core/Button"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
export default function Forward(props){
  const {onClick} = props;
  return(
    <StyledButton onClick={onClick}>
      Next
      <KeyboardArrowRightIcon size="small" />
    </StyledButton>
  )
}
const StyledButton = styled(Button)`
  && {
    width:300px;
    margin:30px;
  }
`