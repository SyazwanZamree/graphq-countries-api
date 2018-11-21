const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World of peace XXXX'}`,
  },
};

export default resolvers;
