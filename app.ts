import express from 'express';

import config from './config';

const {
  PORT
} = config;

const app = express();

app.get('/', (_, res) => {
  res.json({ message: 'Identity service' });
})

app.listen(PORT, () => {
  console.log('App run on port ' + PORT);
})