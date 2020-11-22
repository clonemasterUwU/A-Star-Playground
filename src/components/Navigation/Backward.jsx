import styled from "styled-components"
import Button from "@material-ui/core/Button"
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';export default function Forward(props){
  const {onClick} = props;
  return(
    <StyledButton onClick={onClick}>
      Back
      <KeyboardArrowLeftIcon size="small" />
    </StyledButton>
  )
}
const StyledButton = styled(Button)`
  && {
    width:300px;
    margin:30px;
  }
`