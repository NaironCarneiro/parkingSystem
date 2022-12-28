import styled from 'styled-components'

type PropsContentStyled = {
  width: string
  height: string
}

export const ContainerStyled = styled.div<PropsContentStyled>`
  margin-bottom: 30px;
  input {
    width: ${props => props.width};
    height: ${props => props.height};
  }
`

export const InputStyled = styled.input`
  border-radius: 10px;
  font-size: 18px;
  /* width: 400px; */

  height: 40px;
  border: 0 none;
  padding-left: 15px;
  outline: 0;

  :focus {
    border: 0 none;
    outline: 0;
  }
`
