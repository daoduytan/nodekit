import { ApolloServer } from 'apollo-server-express';

import models from '../models';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const serverGrapql = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    models,
    req,
    res
  })
});

export default serverGrapql;
