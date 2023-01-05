import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import ModalFormRegister from '../../../../components/ModalFormRegister'
import Title from '../../../../components/Title'

import { getUsers } from '../../../../service/getUsers/getUsers'
import {
  ContainerLoginStyled,
  ContentBodyStyled,
  ContainerButtonStyle,
} from './style'

export const Login = (): JSX.Element => {
  const [openModalRegister, setOpenModalRegiste] = useState(false)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    setEmail('')
    setPassword('')
  }, [])

  function handleOpenModal() {
    setOpenModalRegiste(true)
  }

  function handleCloseModal() {
    setOpenModalRegiste(false)
  }

  const onChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
    },
    [email]
  )

  const onChangePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
    },
    [password]
  )

  const handleLogin = async (e: any) => {
    e.preventDefault()

    const data = JSON.stringify({
      email: email,
      password: password,
    })

    const requestOptions: RequestInit = {
      method: 'POST',
      mode: 'no-cors',
      body: data,
    }

    const url = 'http://localhost:8000/api/v1/user/auth/signin'

    fetch(url, requestOptions)
      .then(response => console.log('response', response))
      .then(result => {
        console.log('falha no login', result)
        // if(result.=== “SUCCESS”){
        //   alert(“You are logged in.”);
        //  } else {
        //      alert(“Please check your login information.”);
        //  }
      })
  }

  return (
    <ContentBodyStyled>
      <Title children="Login" />
      <form onSubmit={handleLogin}>
        <ContainerLoginStyled>
          <Input
            onChangeInput={onChangeEmail}
            value={email}
            placeholder="Email"
            type="email"
            name="email"
          />
          <Input
            placeholder="Senha"
            value={password}
            type="password"
            name="password"
            onChangeInput={onChangePassword}
          />

          <ContainerButtonStyle>
            <Button children="Acessar" type="submit" />
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
      </form>
      <ModalFormRegister
        open={openModalRegister}
        closeModal={handleCloseModal}
        title="Registar Usuário"
      />
    </ContentBodyStyled>
  )
}
