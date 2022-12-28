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
  return (
    <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
      <ContainerModalStyle>
        <form action="">
          <ContentLabelStyle>
            <ContentTitleStyle>
              <h2>{title}</h2>
            </ContentTitleStyle>
            <LabelStyle>Dados do Usuário</LabelStyle>
            <ContentInputsStyle>
              <Input placeholder="Nome completo" />
              <Input placeholder="Email " />
              <Input placeholder="Telefone" />
            </ContentInputsStyle>
          </ContentLabelStyle>

          <ContainerButtonsStyle>
            <Button
              borderColor="#fff"
              background="#09046a"
              color="#fff"
              backgroundHover="#0e06b0"
              children="Cadastrar usuário"
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
