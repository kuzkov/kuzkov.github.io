import React, { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Meta from '@components/Meta';

function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <Meta />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
