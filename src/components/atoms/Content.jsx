import styled from  "styled-components"

const StyledContent = styled.div `
      width: 30%; 
      height: 600px; 
      border: 1px solid purple; 
      &:hover {
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
      }
`

function Content(props) {

    return(
        <StyledContent>{props.children}</StyledContent>
    )
}

export default Content;