import React from 'react'
import Head from 'next/head'

import { Box, Container } from '@chakra-ui/react'

type AdminProps = {
  children: React.ReactNode
}
const Admin: React.FC<AdminProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Masahito Osako" />
        <meta name="author" content="m11o" />
      </Head>

      <Box as='main' pb={8}>
        <Container maxW='container.md' pt={2}>
          {children}
        </Container>
      </Box>
    </>
  )
}
export default Admin
