import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
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
import moment from 'moment'

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
  const [nameOwner, setNameOwner] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [brand_model, setBrand_model] = useState<string>('')
  const [licensePlate, setLicensePlate] = useState<string>('')
  const [date, setDate] = useState(moment().format('DD-MM-YYYY'))
  const [entryTime, setEntryTime] = useState<string>('00:00:00')
  const [departureTime, setDepartureTime] = useState<string>('00:00:00')

  useEffect(() => {
    setNameOwner('')
    setPhone('')
    setBrand_model('')
    setLicensePlate('')
    setDate(moment().format('DD-MM-YYYY'))
    setEntryTime('00:00:00')
    setDepartureTime('00:00:00')
  }, [])

  const onChangeNameOwner = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setNameOwner(event.target.value)
    },
    [nameOwner]
  )

  const onChangePhone = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPhone(event.target.value)
    },
    [phone]
  )

  const onChangeBrandModel = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setBrand_model(event.target.value)
    },
    [brand_model]
  )

  const onChangeLicensePlate = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setLicensePlate(event.target.value)
    },
    [licensePlate]
  )

  const onChangeDate = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newDate = moment(new Date(event.target.value)).format('YYYY-MM-DD')
      setDate(newDate)
    },
    [date]
  )

  const onChangeEntryTime = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEntryTime(event.target.value)
      console.log(entryTime)
    },
    [entryTime]
  )

  const onChangeDepartureTime = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDepartureTime(event.target.value)
    },
    [departureTime]
  )

  const handleSubmitData = async (e: any) => {
    e.preventDefault()

    const dataOwner = JSON.stringify({
      name: nameOwner,
      telephone: phone,
    })

    const dataCar = JSON.stringify({
      brand_model: brand_model,
      license_plate: licensePlate,
      tbl_owner_id: 1,
    })

    const dataRegister = JSON.stringify({
      date: date,
      entry_time: entryTime,
      departure_time: departureTime,
      tbl_user_id: 1,
      tbl_car_id: 1,
      tbl_car_tbl_owner_id: 1,
    })

    const requestOptionsOwner: RequestInit = {
      method: 'POST',
      mode: 'no-cors',
      body: dataOwner,
    }

    const requestOptionsCar: RequestInit = {
      method: 'POST',
      mode: 'no-cors',
      body: dataCar,
    }

    const requestOptionsRegister: RequestInit = {
      method: 'POST',
      mode: 'no-cors',
      body: dataRegister,
    }

    const urlOwner = 'http://localhost:8000/api/v1/owner/add'
    const urlCar = 'http://localhost:8000/api/v1/car/add'
    const urlRegister = 'http://localhost:8000/api/v1/register/add'

    fetch(urlOwner, requestOptionsOwner)
      .then(response => console.log('response', response))
      .catch(error => console.log(error))

    fetch(urlCar, requestOptionsCar)
      .then(response => console.log('response', response))
      .catch(error => console.log(error))

    fetch(urlRegister, requestOptionsRegister)
      .then(response => console.log('response', response))
      .catch(error => console.log(error))
  }

  return (
    <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
      <ContainerModalStyle>
        <form onSubmit={handleSubmitData}>
          <ContentLabelStyle>
            <ContentTitleStyle>
              {/* <h2>Cadastro de Veículos</h2> */}
              <h2>{title}</h2>
            </ContentTitleStyle>
            <LabelStyle>Dados do Proprietário</LabelStyle>
            <ContentInputsStyle>
              <Input
                placeholder="Nome do proprietário"
                onChangeInput={onChangeNameOwner}
                value={nameOwner}
                type="text"
                name="nameOwner"
              />
              <Input
                onChangeInput={onChangePhone}
                placeholder="Telefone do propriétario"
                value={phone}
                type="text"
                name="phone"
              />
            </ContentInputsStyle>
          </ContentLabelStyle>
          <ContentLabelStyle>
            <LabelStyle>Dados do Veículo</LabelStyle>
            <ContentInputsStyle>
              <Input
                onChangeInput={onChangeBrandModel}
                placeholder="Modelo/Marca do veículo"
                value={brand_model}
                type="text"
                name="brand_model"
              />
              <Input
                onChangeInput={onChangeLicensePlate}
                placeholder="Placa do veículo"
                value={licensePlate}
                type="text"
                name="licensePlate"
              />
            </ContentInputsStyle>
          </ContentLabelStyle>
          <ContentLabelStyle>
            <LabelStyle>Horários</LabelStyle>
            <ContentInputsStyle>
              <ContentLabelStyle>
                <label>Data de chegada</label>
                <Input
                  onChangeInput={onChangeDate}
                  type="date"
                  width="200px"
                  placeholder="Data"
                  value={date}
                  name="date"
                />
              </ContentLabelStyle>
              <ContentLabelStyle>
                <label>Horário de Chegada</label>
                <Input
                  onChangeInput={onChangeEntryTime}
                  type="time"
                  width="200px"
                  value={entryTime}
                  name="entryTime"
                />
              </ContentLabelStyle>
              <ContentLabelStyle>
                <label>Horário de saída</label>
                <Input
                  onChangeInput={onChangeDepartureTime}
                  type="time"
                  width="200px"
                  value={departureTime}
                  name="departureTime"
                />
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
