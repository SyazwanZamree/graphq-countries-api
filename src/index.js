import { GraphQLServer } from 'graphql-yoga';

import resolvers from './resolvers/countryResolvers';
import typeDefs from './schemas/countryType';

const gqlserver = new GraphQLServer({
  typeDefs,
  resolvers,
});

gqlserver.start();
