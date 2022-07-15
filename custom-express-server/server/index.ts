// custom server with express

import { parse } from 'url';
import express from 'express';
import next from 'next';

const isDev = process.env.NODE_ENV !== 'production';
const app = next({ dev: isDev });

const main = async () => {
  try {
    await app.prepare();

    const handle = app.getRequestHandler();
    const expressServer = express();

    expressServer
      // TODO this will have all get routes be handled by next
      // .get('*', (req, res) => {
      //   const url = parse(req.url, true);
      //   handle(req, res, url);
      // })

      // this will make the app not use next at all
      .get('/', (req, res) => {
        res.send('hello world');
      })
      .get('/api/greet', (req, res) => {
        res.json({ name: req.query?.name ?? 'unknown' });
      })
      .get('/about', (req, res) => {
        const { query } = parse(req.url, true);
        console.log({ query });
        app.render(req, res, '/about', query);
      })
      .get(/_next\/.+/, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
      })
      .listen(3000, () => console.log('Server ready'));
  } catch (err) {
    console.log(err);
  }
};

main();
