import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from './config';
import routes from './routes';
import middlewares from './middlewares';

const {
  PORT
} = config;

const app = express();

app.get('/', (_, res) => {
  res.json({ message: 'Identity service' });
});

app.use(bodyParser.json());
app.use(middlewares.pre);
app.use(routes);
app.use(middlewares.post);

mongoose.connect('mongodb://mongoadmin:secret@localhost:27888/db_playground?authSource=admin', () => {
  app.listen(PORT, () => {
    console.log('App run on port ' + PORT);
  });
});

