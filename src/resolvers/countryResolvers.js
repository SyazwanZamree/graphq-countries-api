const resolvers = {
  Query: {
    getAllCountries: async (parent, args, { models }) => {
      const countries = await models.Country.find();
      console.log('countries', countries);
    },
    getCountry: async (parent, args, { models }) => {
      const countries = await models.Country.find();
      console.log('countries', countries);
    },
    searchCountries: async (parent, args, { models }) => {
      const countries = await models.Country.find();
      console.log('countries', countries);
    },
  },
  Country: {
    currencies: async (parent, args, { models }) => {
      const countries = await models.Country.find();
      console.log('countries', countries);
    },
    languages: async (parent, args, { models }) => {
      const countries = await models.Country.find();
      console.log('countries', countries);
    },
    translations: async (parent, args, { models }) => {
      const countries = await models.Country.find();
      console.log('countries', countries);
    },
    regionalBlocs: async (parent, args, { models }) => {
      const countries = await models.Country.find();
      console.log('countries', countries);
    },
  },
};

export default resolvers;
