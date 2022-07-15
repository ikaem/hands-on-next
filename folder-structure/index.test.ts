// custom server with express

import { parse } from 'url';
import express from 'express';
import next from 'next';

const isDev = process.env.NODE_ENV !== 'production';
const app = next({ dev: isDev });
