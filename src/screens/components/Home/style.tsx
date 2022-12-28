import styled from 'styled-components'

export const ContainerTableBodyStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #909090;
  width: 100%;
  height: 60%;
`

export const TableCarsStyle = styled.table`
  width: 900px;
  border-collapse: collapse;
  color: #000000;
  border: #000000 1px solid;

  thead {
    background-color: #1cc2a9;
  }

  th {
    padding: 10px;
    border: #000000 1px solid;
  }

  tr {
    border: #000000 1px solid;
  }

  td {
    padding: 10px;
    border: #000000 1px solid;
  }
`

export const ContainerButtonsStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
`
export const ContainerTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  padding-top: 20px;
`
