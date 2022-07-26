import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex w='full' minH={'100vh'} bgColor='gray.100'>
        <Box maxW={'70vw'} m='auto'>
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
