import React, { useState } from 'react'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import ModalFormRegister from '../../../../components/ModalFormRegister'
import Title from '../../../../components/Title'
import {
  ContainerLoginStyled,
  ContentBodyStyled,
  ContainerButtonStyle,
} from './style'

export const Login = (): JSX.Element => {
  const [openModalRegister, setOpenModalRegiste] = useState(false)

  function handleOpenModal() {
    setOpenModalRegiste(true)
  }

  function handleCloseModal() {
    setOpenModalRegiste(false)
  }

  return (
    <ContentBodyStyled>
      <Title children="Login" />
      <ContainerLoginStyled>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />

        <ContainerButtonStyle>
          <Button children="Acessar" />
        </ContainerButtonStyle>
        <p>
          Ainda não possui conta,{' '}
          <a
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={handleOpenModal}
          >
            click aqui
          </a>{' '}
          para criar uma agora.
        </p>
      </ContainerLoginStyled>

      <ModalFormRegister
        open={openModalRegister}
        closeModal={handleCloseModal}
        title="Registar Usuário"
      />
    </ContentBodyStyled>
  )
}
