import { ColorModeScript, extendTheme } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

const config = {
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorModel} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
