require('babel-polyfill');
const typeDefs = `
  type User {
    id: ID!,
    username: String!,
    token: String,
    info: String,
  }

  type Query {
    allUser: [User!],
    user(id: ID!): User
  }

  type Mutation {
    login(username: String!, password: String !): User
  }
`;

export default typeDefs;
