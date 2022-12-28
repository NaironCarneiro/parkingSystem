import styled from 'styled-components'

type PropsTitle = {
  width: string
}

export const ContainerStyle = styled.div<PropsTitle>`
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  width: ${props => props.width};
  height: 40px;
`

export const TitleStyle = styled.h1`
  text-align: center;
  font-size: 30px;
  color: #000000;
`
