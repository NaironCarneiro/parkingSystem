import React from 'react'
import { ContainerStyle, ButtonStyle } from './styled'

export type PropsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  handleClick?: (event: MouseEvent) => void
  background?: string
  color?: string
  backgroundHover?: string
  colorHover?: string
  borderColor?: string
}

export const Button = ({
  children,
  handleClick = () => {},
  background = '#fff',
  color = '#000',
  backgroundHover = '#00005c',
  colorHover = '#fff',
  borderColor = '#fff',
}: PropsButton): JSX.Element => {
  return (
    <>
      <ButtonStyle
        onClick={handleClick}
        background={background}
        color={color}
        backgroundHover={backgroundHover}
        colorHover={colorHover}
        borderColor={borderColor}
      >
        <span>{children}</span>
      </ButtonStyle>
    </>
  )
}
