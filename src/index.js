import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import mongodb from './mongodb';
import appRouter from './appRouter';
import appGraphyQL from './appGraphQL';

// env configs
dotenv.config();

// general app express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors('*'));

// graphql api
appGraphyQL.applyMiddleware({ app });

// rest api
appRouter(app);

// connect mongodb
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// run app
const { PORT } = process.env;
mongodb(mongoose, () => {
  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${appGraphyQL.graphqlPath}`
    )
  );
});
