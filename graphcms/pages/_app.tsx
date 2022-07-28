import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import { CartContextProvider } from '../contexts/cart-context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CartContextProvider>
        <Flex w='full' minH={'100vh'} bgColor='gray.100'>
          <Navbar />
          <Box maxW={'70vw'} m='auto'>
            <Component {...pageProps} />
          </Box>
        </Flex>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
