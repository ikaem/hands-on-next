import { ApolloProvider } from '@apollo/client';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Head from 'next/head';
import ShoppingCartContext, {
  ShoppingCartProvider,
} from '../components/context/shopping-cart-context';
import TopBar from '../components/organisms/TopBar';
import { useApollo } from '../lib/grapqhl';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
// import '../styles/globals.css';

// const chakraTheme = extendTheme({
//   colors: {
//     brand: {
//       100: '#ffebee',
//       200: '#e57373',
//       300: '#f44336',
//       400: '#e53935',
//     },
//   },
// });

function MyApp({ Component, pageProps }) {
  // const apolloClient = useApollo(pageProps.initialApolloState);

  // tailwind below
  return (
    <>
    {/* apparently, this sets a dark class to the main html tag */}
    {/* actually, it sets light class  */}
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );

  // chakra below
  // return (
  //   <ChakraProvider>
  //     <TopBar />
  //     <Box maxWidth={'container.xl'} margin='auto'>
  //       <Component {...pageProps} />
  //     </Box>
  //   </ChakraProvider>
  // );

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
  // apollo below
  {
    /*       <ApolloProvider client={apolloClient}>
        <ShoppingCartProvider>
          <ChakraProvider theme={chakraTheme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </ShoppingCartProvider>
      </ApolloProvider> */
  }
  // );
}

export default MyApp;
