import styled from 'styled-components'

export const ContainerModalStyle = styled.div`
  background-color: #09046a;
  width: 400px;
  height: 550px;
`
export const ContainerButtonsStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin-top: 40px;
`
export const ContentInputsStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

export const ContentLabelStyle = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentTitleStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  h2 {
    display: flex;
    justify-content: center;

    color: #000;
    border-radius: 5px;
    align-items: center;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const LabelStyle = styled.label`
  font-size: 19px;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
  background-color: #000;
`
