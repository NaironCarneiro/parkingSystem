import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'

import {
  ContainerModalStyle,
  ContainerButtonsStyle,
  ContentInputsStyle,
  ContentLabelStyle,
  LabelStyle,
  ContentTitleStyle,
} from './style'
import Modal from 'react-modal'
import Button from '../Button'
import Input from '../Input'

type PropsTitle = {
  open: boolean
  closeModal: (event: MouseEvent) => void
  title: string
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none',
    background: '#09046a',
  },
}

export const ModalFormRegister = ({
  open,
  closeModal,
  title,
}: PropsTitle): JSX.Element => {
  const [nameInput, setNameInput] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    setNameInput('')
    setEmail('')
    setPassword('')
  }, [])

  const onChangeName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setNameInput(event.target.value)
    },
    [nameInput]
  )

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

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const data = JSON.stringify({
      name: nameInput,
      email: email,
      password: password,
    })

    const requestOptions: RequestInit = {
      method: 'POST',
      mode: 'no-cors',
      body: data,
    }

    const url = 'http://localhost:8000/api/v1/user/auth/signup'

    fetch(url, requestOptions)
      .then(response => console.log('response', response))
      .catch(error => console.log(error))
  }

  return (
    <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
      <ContainerModalStyle>
        <form onSubmit={handleSubmit}>
          <ContentLabelStyle>
            <ContentTitleStyle>
              <h2>{title}</h2>
            </ContentTitleStyle>
            <LabelStyle>Dados do Usuário</LabelStyle>
            <ContentInputsStyle>
              <Input
                onChangeInput={onChangeName}
                value={nameInput}
                name="name"
                type="name"
                placeholder="Nome completo"
              />
              <Input
                onChangeInput={onChangeEmail}
                value={email}
                type="email"
                name="email"
                placeholder="Email"
              />
              <Input
                onChangeInput={onChangePassword}
                value={password}
                name="password"
                type="password"
                placeholder="Senha"
              />
            </ContentInputsStyle>
          </ContentLabelStyle>

          <ContainerButtonsStyle>
            <Button
              borderColor="#fff"
              background="#09046a"
              color="#fff"
              backgroundHover="#0e06b0"
              children="Cadastrar usuário"
              type="submit"
            />
            <Button
              handleClick={closeModal}
              background="#d1ccccb9"
              backgroundHover="#fff"
              colorHover="#000"
              borderColor="#09046a"
              children="Cancelar"
            />
          </ContainerButtonsStyle>
        </form>
      </ContainerModalStyle>
    </Modal>
  )
}
