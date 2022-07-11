import { ApolloProvider } from '@apollo/client';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Head from 'next/head';
import ShoppingCartContext, {
  ShoppingCartProvider,
} from '../components/context/shopping-cart-context';
import TopBar from '../components/organisms/TopBar';
import { useApollo } from '../lib/grapqhl';
// import '../styles/globals.css';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#ffebee',
      200: '#e57373',
      300: '#f44336',
      400: '#e53935',
    },
  },
});

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ChakraProvider>
      <TopBar />
      <Box maxWidth={'container.xl'} margin='auto'>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );

  {
    /* <Head>
        <link rel='manifest' href='/manifest.json' />
        <link
          href='https://unpkg.com/tailwindcss@^2/dist/
          tailwind.min.css'
          rel='stylesheet'
        />
      </Head> */
  }
  {
    /*       <ApolloProvider client={apolloClient}>
        <ShoppingCartProvider>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </ShoppingCartProvider>
      </ApolloProvider> */
  }
  // );
}

export default MyApp;
