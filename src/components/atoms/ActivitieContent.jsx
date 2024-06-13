import styled from "styled-components"

const StyledActivitie = styled.div `
      width: 74%;
      height: 36px; 
      background-color: #007FFF;
      border-radius: 5px;
      display: flex; 
      justify-content: space-around;
`

function ActivitieContent(props) {

    return(
        <StyledActivitie>{props.children}</StyledActivitie>
    )
}

export default ActivitieContent; 