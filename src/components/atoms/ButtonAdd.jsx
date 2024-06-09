import styled from "styled-components";

const StyledButton = styled.button `
      width: 15%;
      height: 33px; 
      border: 1px solid black; 

`

function ButtonAdd({onClick, title}) {

    return(
        <StyledButton onClick={onClick}>{title}</StyledButton>
    )
}

export default ButtonAdd;