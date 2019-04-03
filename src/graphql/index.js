import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const graphql = app => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    })
  );

  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({ schema, context: {} }) //context : { models }
  );
};

export default graphql;
