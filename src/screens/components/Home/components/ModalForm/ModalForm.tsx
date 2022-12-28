import React, { useState } from 'react'
import Button from '../../../../../../components/Button'
import {
  ContainerModalStyle,
  ContainerButtonsStyle,
  ContentInputsStyle,
  ContentLabelStyle,
  LabelStyle,
  ContentTitleStyle,
} from './style'
import Modal from 'react-modal'
import Input from '../../../../../../components/Input'

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

export const ModalForm = ({
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
              {/* <h2>Cadastro de Veículos</h2> */}
              <h2>{title}</h2>
            </ContentTitleStyle>
            <LabelStyle>Dados do Proprietário</LabelStyle>
            <ContentInputsStyle>
              <Input placeholder="Nome do proprietário" />
              <Input placeholder="Telefone do propriétario" />
            </ContentInputsStyle>
          </ContentLabelStyle>
          <ContentLabelStyle>
            <LabelStyle>Dados do Veículo</LabelStyle>
            <ContentInputsStyle>
              <Input placeholder="Modelo/Marca do veículo" />
              <Input placeholder="Placa do veículo" />
            </ContentInputsStyle>
          </ContentLabelStyle>
          <ContentLabelStyle>
            <LabelStyle>Horários</LabelStyle>
            <ContentInputsStyle>
              <ContentLabelStyle>
                <label>Data de chegada</label>
                <Input type="date" width="200px" placeholder="Data" />
              </ContentLabelStyle>
              <ContentLabelStyle>
                <label>Horário de Chegada</label>
                <Input type="time" width="200px" />
              </ContentLabelStyle>
              <ContentLabelStyle>
                <label>Horário de saída</label>
                <Input type="time" width="200px" />
              </ContentLabelStyle>
            </ContentInputsStyle>
          </ContentLabelStyle>

          <ContainerButtonsStyle>
            <Button
              borderColor="#fff"
              background="#09046a"
              color="#fff"
              backgroundHover="#0e06b0"
              children="Cadastrar veiculo"
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
