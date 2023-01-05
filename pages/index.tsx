import Head from 'next/head'
// import { Inter } from '@next/font/google'
import React from 'react'
import { Container } from '../styles/pages/Home'

import Login from '../src/screens/components/Login'
import Home from '../src/screens/components/Home'

// const inter = Inter({ subsets: ['latin'] })

const HomePage: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Parking Car</title>
      </Head>

      {/* <Login /> */}
      <Home />
    </Container>
  )
}

export default HomePage
