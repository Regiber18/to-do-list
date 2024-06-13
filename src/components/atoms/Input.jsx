import { useState } from "react"
import styled from "styled-components"

const StyledInput = styled.input `
      width: 60%;
      height: 35px; 
      border-radius: 3px; 
      color: black;
      border: 2px solid #007FFF; 
`

function Input(props) {
   

    const handleChange = (event) => {
        props.fnval(event.target.value)
    }

    return(
        <StyledInput onChange={handleChange} value={props.value} placeholder={props.placeholder}></StyledInput>
    )
}

export default Input;