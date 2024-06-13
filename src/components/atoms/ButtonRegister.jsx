import styled from "styled-components";

const StyledButton = styled.button `
      width: 60%; 
      height: 32px;
      background-color: #007FFF;
      border: 1px solid #007FFF;
      border-radius: 2px;
      text-decoration: none;
      text-transform: uppercase;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      -webkit-transition-property: box-shadow, transform;
      transition-property: box-shadow, transform;

      &:hover, focus, active {
       box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
       -webkit-transform: scale(1.1);
       transform: scale(1.1);
      }
`

function Button({onClick,title}) {

    return(
        <StyledButton onClick={onClick}>{title}</StyledButton>
    )
}

export default Button;