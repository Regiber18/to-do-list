import styled from "styled-components"

const StyledTitle = styled.h1 `
      font-size: 16px;
      color: black;
      font-family: arial, sans-serif;

`

function Title(props) {

    return(
        <StyledTitle>{props.title}</StyledTitle>
    )
}

export default Title;