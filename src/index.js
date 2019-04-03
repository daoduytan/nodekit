require('babel-polyfill');
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import { mongodb } from './database';
import graphql from './graphql';

// import routes from './routes';

// config env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// connect mongodb
mongodb(() => {
  // add middleware
  app.use(cors());

  // router for rest api
  // app.use(bodyParser.json())
  // routes(app);

  // router graphql
  graphql(app);
});

app.listen(PORT, () => console.log(`Server is running in ${PORT}`));
