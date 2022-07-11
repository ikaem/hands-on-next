import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import { useApollo } from '../lib/grapqhl';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link
          href='https://unpkg.com/tailwindcss@^2/dist/
  tailwind.min.css'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
