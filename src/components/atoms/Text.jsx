import styled from "styled-components"

const StyledText = styled.p `
      font-size: 10px;
      font-family: arial, sans-serif;
`

function Text(props) {

    return(
        <StyledText>{props.text}</StyledText>
    )
}

export default Text;