import styled from "styled-components"

const StyledText = styled.p `
      font-size: 16px;
      font-family: arial, sans-serif;
`

function Text(props) {

    return(
        <StyledText>{props.text}</StyledText>
    )
}

export default Text;