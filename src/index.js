import { GraphQLServer } from 'graphql-yoga';

import resolvers from './resolvers/countryResolvers';
import typeDefs from './schemas/countryType';
// import models from './database/models/CountryModel';
//
// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `;
//
// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || 'World XXXX'}`,
//   },
// };

const gqlserver = new GraphQLServer({
  typeDefs,
  resolvers,
});

gqlserver.start();

export default gqlserver;
