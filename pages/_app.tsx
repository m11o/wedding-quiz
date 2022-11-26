import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Admin from '../src/layout/admin'

const App = ({ Component, pageProps }: AppProps) => {
  switch (pageProps.layout) {
    case 'admin':
      return (
        <ChakraProvider>
          <Admin>
            <Component {...pageProps} />
          </Admin>
        </ChakraProvider>
      )
    case 'slide':
      break
    case 'sp':

  }
}
export default App
