import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import resolvers from './resolvers/countryResolvers';
import typeDefs from './schemas/countryType';
import models from './database/models/index';

const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV;
const hmr = module.hot ? 'activated' : 'deactivated';
const db = 'mongodb://localhost:27017/country-test-1';
const context = { models };

const gqlserver = new GraphQLServer({
  typeDefs,
  resolvers,
  context,
});

gqlserver.start(port, () => {
  bodyParser.json();
  mongoose.Promise = Promise;
  mongoose.connect(db, { useNewUrlParser: true });

  console.log('Welcome to Grouver GraphQL API');
  console.log(`For more info go to http://127.0.0.1:${port}/`);
  console.log('==========================================');
  console.log(`Port: ${port}`);
  console.log(`Environment: ${env}`);
  console.log(`Hot reload: ${hmr}`);
});
