import styled from "styled-components";

const StyledButton = styled.button `
      width: 35%;
      height: 33px; 
      border-radius: 2px;
      background-color:#007FFF;
      border: 1px solid #007FFF;
`

function ButtonAdd({onClick, title}) {

    return(
        <StyledButton onClick={onClick}>{title}</StyledButton>
    )
}

export default ButtonAdd;