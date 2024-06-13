import styled from "styled-components";
import { FaTrash } from 'react-icons/fa'
const StyledIcon = styled.button `
      width: 100%;
      height: 100%;
      background-color: #007FFF;
      border: none; 
`

function Icon({onClickdelate}) {

    return(
        <StyledIcon onClick={onClickdelate} ><FaTrash></FaTrash></StyledIcon>
    )
}

export default Icon;  