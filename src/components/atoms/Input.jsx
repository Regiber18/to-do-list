import { useState } from "react"
import styled from "styled-components"
import { useCallback } from "react"
const StyledInput = styled.input `
      width: 60%;
      height: 35px; 
      border-radius: 3px; 
      color: black;
      border: 2px solid #007FFF; 
`

function Input(props) {
   
    const call = useCallback(
    (event) => {   
        props.fnval(event.target.value)
    
    }, []
    ) 
    return(
        <StyledInput onChange={call} value={props.value} placeholder={props.placeholder}></StyledInput>
    )
}

export default Input;