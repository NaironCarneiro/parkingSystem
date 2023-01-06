import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../../../../components/Button'
import Title from '../../../../components/Title'
import ModalForm from './components/ModalForm'
import ModalFormEdit from './components/ModalFormEdit'
import { Report } from './components/Report/Report'
import {
  TableCarsStyle,
  ContainerTableBodyStyle,
  ContainerButtonsStyle,
  ContainerTitleStyle,
} from './style'

export const Home = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false)
  const [openModalEdit, setOpenModalEdit] = useState(false)

  const [registerData, setRegisterData] = useState([])

  const [idEdit, setIdEdit] = useState<number>()

  function handleOpenModal() {
    setOpenModal(true)
  }

  function handleCloseModal() {
    setOpenModal(false)
    setOpenModalEdit(false)
  }

  const handleOpenEditModal = (id: number) => {
    setIdEdit(id)
    setOpenModalEdit(true)
  }

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/register/all`)
      .then(response => response.json())
      .then(result => {
        setRegisterData(result.data)
      })
  }, [])

  const handleDelete = (id: number) => {
    const url = `http://localhost:8000/api/v1/register/delete/${id}`

    console.log(id)

    location.reload()

    fetch(url, {
      method: 'DELETE',
    }).then(response => {
      console.log(response.status)
    })
  }

  return (
    <>
      <ContainerTitleStyle>
        <Title width="500px" children="Tabela de Carros Cadastrados" />
      </ContainerTitleStyle>
      <ContainerTableBodyStyle>
        <TableCarsStyle>
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
            {registerData?.map(item => {
              return (
                <tr>
                  <td>{item.register_id}</td>
                  <td>{item.owner_name}</td>
                  <td>{item.telephone}</td>
                  <td>{item.license_plate}</td>
                  <td>{item.brand_model}</td>
                  <td>{item.date}</td>
                  <td>{item.entry_time}</td>
                  <td>{item.departure_time}</td>
                  <td>
                    <a
                      onClick={() => handleOpenEditModal(item.register_id)}
                      style={{
                        marginRight: '10px',
                        cursor: 'pointer',
                        color: 'blue',
                      }}
                    >
                      Editar
                    </a>
                    <a
                      onClick={() => handleDelete(item.register_id)}
                      style={{
                        textDecoration: 'none',
                        marginRight: '10px',
                        cursor: 'pointer',
                        color: '#990000',
                      }}
                    >
                      Deletar
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TableCarsStyle>
      </ContainerTableBodyStyle>

      <ContainerButtonsStyle>
        <Button handleClick={handleOpenModal} children="Cadastrar" />
        <Report />
      </ContainerButtonsStyle>

      <ModalForm
        open={openModal}
        closeModal={handleCloseModal}
        title="Cadastro de Veículos"
      />
      <ModalFormEdit
        open={openModalEdit}
        closeModal={handleCloseModal}
        title="Editar Dados"
        id={idEdit}
      />
    </>
  )
}
