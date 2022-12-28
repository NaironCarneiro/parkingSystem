import React, { forwardRef } from 'react'
import { InputStyled, ContainerStyled } from './styled'

type PropsInput = React.InputHTMLAttributes<HTMLInputElement> & {
  width?: string
  value?: string
  height?: string
  placeholder?: string
  type?: string
}

/**
 * @export
 * @component
 * @name Input
 *
 * @description
 * Responsável pelo componente de Input
 */

export const Input = forwardRef<HTMLInputElement, PropsInput>(
  (
    { width = '300px', value, height = '40px', placeholder, type = 'text' },
    ref
  ): JSX.Element => {
    return (
      <ContainerStyled width={width} height={height}>
        <InputStyled
          ref={ref}
          placeholder={placeholder}
          value={value}
          type={type}
        />
      </ContainerStyled>
    )
  }
)
