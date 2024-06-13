import styled from "styled-components";
import { FaSync } from 'react-icons/fa';
const StyledIcon = styled.button `
      width: 100%;
      height: 100%;
      background-color: #007FFF;
      border: none; 
`

function IconUpdate({onClickupdate}) {

    return(
        <StyledIcon onClick={onClickupdate} ><FaSync></FaSync></StyledIcon>
    )
}

export default IconUpdate;  