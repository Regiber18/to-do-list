import styled from "styled-components";

const StyledButton = styled.button `
      width: 60%; 
      height: 32px;
`

function Button({onClick1}) {

    return(
        <StyledButton onClick={onClick1}></StyledButton>
    )
}

export default Button;