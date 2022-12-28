import React from 'react'
import { ContainerStyle, TitleStyle } from './styled'

type PropsTitle = {
  children: string
  width?: string
}

export const Title = ({
  children,
  width = '200px',
}: PropsTitle): JSX.Element => (
  <ContainerStyle width={width}>
    <TitleStyle>{children} </TitleStyle>
  </ContainerStyle>
)
