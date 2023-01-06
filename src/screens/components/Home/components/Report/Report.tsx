import React, { useEffect, useState } from 'react'

import pdfMake from 'pdfmake/build/pdfmake'

import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs

const TABLE_HEADER: any[] = [
  { text: 'ID', style: 'tableHeader' },

  { text: 'Data', style: 'tableHeader' },

  { text: 'Entrada', style: 'tableHeader' },

  { text: 'Saida', style: 'tableHeader' },

  { text: 'Gerente', style: 'tableHeader' },

  { text: 'Email', style: 'tableHeader' },

  { text: 'Proprietario', style: 'tableHeader' },

  { text: 'Telefone', style: 'tableHeader' },

  { text: 'Carro', style: 'tableHeader' },

  { text: 'Placa', style: 'tableHeader' },
]

function generateTableBody(data: any[]) {
  return data?.map((item: any) => [
    item.register_id,

    item.date,

    item.entry_time,

    item.departure_time,

    item.user_name,

    item.email,

    item.owner_name,

    item.telephone,

    item.brand_model,

    item.license_plate,
  ])
}

function countRegistersPerUser(data: any[]) {
  const registersPerUser: { [key: string]: number } = {}

  data?.forEach((item: any) => {
    if (item.user_name in registersPerUser) {
      registersPerUser[item.user_name] += 1
    } else {
      registersPerUser[item.user_name] = 1
    }
  })

  return registersPerUser
}

function generateSummaryTable(registersPerUser: { [key: string]: number }) {
  const summaryTable: any[][] = [['Usuário', 'Registros']]

  Object.keys(registersPerUser).forEach((userName: string) => {
    summaryTable.push([userName, registersPerUser[userName]])
  })

  return summaryTable
}

export function Report() {
  const [data, setData] = useState<null | any>(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/api/v1/register/all')

      const result = await response.json()

      setData(result)
    }

    fetchData()
  }, [])

  const generatePDF = () => {
    const docDefinition = {
      pageMargins: [20, 60, 20, 30],

      content: [
        { text: 'Dados', style: 'header' },

        { text: `Total de carros: ${data?.data?.length}` },

        {
          text: `Total de usuários: ${
            new Set(data?.data?.map(item => item.user_name)).size
          }`,
        },

        {
          style: 'table',

          table: {
            widths: ['50%', '50%'],

            body: generateSummaryTable(countRegistersPerUser(data?.data)),
          },
        },

        { text: ' ', style: 'header' },

        { text: 'Registros', style: 'header' },

        {
          style: 'table',

          table: {
            widths: [
              '3%',

              '10%',

              '10%',

              '10%',

              '10%',

              '17%',

              '10%',

              '10%',

              '10%',

              '10%',
            ],

            body: [TABLE_HEADER, ...generateTableBody(data?.data)],
          },
        },
      ],

      styles: {
        header: {
          fontSize: 18,

          bold: true,
        },

        table: {
          margin: [0, 5, 0, 15],

          fontSize: 9,
        },

        tableHeader: {
          bold: true,

          fontSize: 13,

          color: 'black',
        },
      },
    }

    pdfMake.createPdf(docDefinition).download('relatorio.pdf')
  }

  return (
    <div>
      {data ? (
        <button onClick={generatePDF}>Gerar PDF</button>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  )
}
