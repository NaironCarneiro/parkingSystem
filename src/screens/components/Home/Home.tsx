import React, { useState } from 'react'
import Button from '../../../../components/Button'
import Title from '../../../../components/Title'
import ModalForm from './components/ModalForm'
import {
  TableCarsStyle,
  ContainerTableBodyStyle,
  ContainerButtonsStyle,
  ContainerTitleStyle,
} from './style'

export const Home = (): JSX.Element => {
  var carros = [
    {
      id: 1,
      nameOwner: 'Bruno',
      phone: '98272726633',
      plate: 'HRT8754',
      model: 'corsa',
      date: '12-12-2022',
      arrival: '12:00',
      exit: '13:00',
    },
    {
      id: 2,
      nameOwner: 'Paulo',
      phone: '98272726633',
      plate: 'LKA1289',
      model: 'punto',
      date: '02-09-2022',
      arrival: '14:00',
      exit: '16:00',
    },
    {
      id: 3,
      nameOwner: 'Poli',
      phone: '98272726633',
      plate: 'KAIS2345',
      model: 'gol',
      date: '01-10-2022',
      arrival: '02:00',
      exit: '19:00',
    },
    {
      id: 4,
      nameOwner: 'Carlos',
      phone: '98272726633',
      plate: 'IUR0923',
      model: 'corolla',
      date: '19-11-2022',
      arrival: '10:30',
      exit: '11:40',
    },
  ]

  const [openModal, setOpenModal] = useState(false)
  const [openModalEdit, setOpenModalEdit] = useState(false)

  function handleOpenModal() {
    setOpenModal(true)
  }

  function handleCloseModal() {
    setOpenModal(false)
    setOpenModalEdit(false)
  }

  function handleOpenEditModal() {
    setOpenModalEdit(true)
  }

  return (
    <>
      <ContainerTitleStyle>
        <Title width="500px" children="Tabela de Carros Cadastrados" />
      </ContainerTitleStyle>
      <ContainerTableBodyStyle>
        <TableCarsStyle>
          {/* <caption>CARROS CADASTRADOS</caption> */}
          <thead>
            <tr>
              <th>ID</th>
              <th>PROPRIETÁRIO</th>
              <th>TELEFONE</th>
              <th>PLACA</th>
              <th>MODELO/MARCA</th>
              <th>DATA</th>
              <th>CHEGADA</th>
              <th>SAÍDA</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {carros.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nameOwner}</td>
                <td>{item.phone}</td>
                <td>{item.plate}</td>
                <td>{item.model}</td>
                <td>{item.date}</td>
                <td>{item.arrival}</td>
                <td>{item.exit}</td>
                <td>
                  <a
                    onClick={handleOpenEditModal}
                    style={{ marginRight: '10px', cursor: 'pointer' }}
                  >
                    editar
                  </a>
                  <a href="">deletar</a>
                </td>
              </tr>
            ))}
          </tbody>
        </TableCarsStyle>
      </ContainerTableBodyStyle>

      <ContainerButtonsStyle>
        <Button handleClick={handleOpenModal} children="Cadastrar" />
        <Button children="Gerar Relatório" />
      </ContainerButtonsStyle>

      <ModalForm
        open={openModal}
        closeModal={handleCloseModal}
        title="Cadastro de Veículos"
      />
      <ModalForm
        open={openModalEdit}
        closeModal={handleCloseModal}
        title="Editar Dados"
      />
    </>
  )
}
