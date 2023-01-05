import React, { ChangeEvent, forwardRef } from 'react'
import { InputStyled, ContainerStyled } from './styled'

type PropsInput = React.InputHTMLAttributes<HTMLInputElement> & {
  width?: string
  value?: string | Date
  height?: string
  placeholder?: string
  type?: string
  onChangeInput?: (event: ChangeEvent<HTMLInputElement>) => void
  name?: string
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
    {
      width = '300px',
      value,
      height = '40px',
      placeholder,
      type = 'text',
      onChangeInput,
      name,
    },
    ref
  ): JSX.Element => {
    return (
      <ContainerStyled width={width} height={height}>
        <InputStyled
          ref={ref}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChangeInput}
          name={name}
        />
      </ContainerStyled>
    )
  }
)
