import styled from "styled-components"

const StyledInput = styled.input `
      width: 60%;
      height: 35px; 
      background-color: #191970;
      border-radius: 3px; 
      color: white;
`

function Input(props) {
    
    const handleronChange = (event) => {
        props.fnval(event.target.value)
    }


    return(
        <StyledInput onChange={handleronChange} value={props.val} type={props.type} placeholder={props.placeholder}>

        </StyledInput>
    )
}

export default Input;