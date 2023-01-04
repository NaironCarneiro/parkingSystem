import React, { useState } from 'react'

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
import axios from 'axios'

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
    // paddingTop: '20px',
  },
}

export const ModalFormRegister = ({
  open,
  closeModal,
  title,
}: PropsTitle): JSX.Element => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const onChangeHandler = (e: any) => {
    setName(e.target.value)
    setEmail(e.target.value)
    setPassword(e.target.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const data = JSON.stringify({
      name: 'name',
      email: 'email@gmail.com',
      password: 'password',
    })

    const requestOptions: RequestInit = {
      method: 'POST',
      // mode: 'no-cors',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      // },
      body: data,
    }

    const url = 'http://localhost:8000/api/v1/user/add'

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
                onChange={onChangeHandler}
                value={name}
                name="name"
                placeholder="Nome completo"
              />
              <Input
                onChange={onChangeHandler}
                value={email}
                name="email"
                placeholder="Email"
              />
              <Input
                onChange={onChangeHandler}
                value={password}
                name="password"
                type="password"
                placeholder="Password"
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
