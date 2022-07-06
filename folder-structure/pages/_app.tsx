import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
