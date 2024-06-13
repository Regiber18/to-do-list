import styled from  "styled-components"

const StyledContent = styled.div `
      width: 30%; 
      height: 600px; 
      border-radius: 4px;
      background-color: #1560bd;

     
`

function Content(props) {

    return(
        <StyledContent>{props.children}</StyledContent>
    )
}

export default Content;