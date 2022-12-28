import styled from 'styled-components'

type PropsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  background?: string
  color?: string
  backgroundHover?: string
  colorHover?: string
  borderColor?: string
}

export const ContainerStyle = styled.div``

export const ButtonStyle = styled.button<PropsButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  border: 1px solid ${props => props.borderColor};
  border-radius: 10px;
  background-color: ${props => props.background};
  cursor: pointer;
  font-size: 16px;
  color: ${props => props.color};
  outline: 0;
  font-weight: bold;

  :hover {
    border: 0 none;
    outline: 0;
    border: 1px solid ${props => props.borderColor};
    color: ${props => props.colorHover};
    transition: 0.7s;
    background-color: ${props => props.backgroundHover};
  }
`
