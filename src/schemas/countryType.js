export default `
  type Query {
    hello(name: String): String!
    getAllCountries: [Country]
    getCountry: Country
    searchCountries: [Country]
  }

  type Country {
    name: String
    topLevelDomain: [String]
    alpha2Code: String
    alpha3Code: String
    callingCodes: [Int]
    capital: String
    altSpellings: [String]
    region: String
    subregion: String
    population: Int
    latlng: [Int]
    demonym: String
    area: Int
    gini: Int
    timezones: [String]
    borders: [String]
    nativeName: String
    numericCode: Int
    currencies: [Currency]
    languages: [Language]
    translations: Translation
    flag: String
    regionalBlocs: [RegionalBloc]
    cioc: String
  }

  type Currency {
    code: String
    name: String
    symbol: String
  }

  type Language {
    iso639_1: String
    iso639_2: String
    name: String
    nativeName: String
  }

  type Translation {
    de: String
    es: String
    fr: String
    ja: String
    it: String
    br: String
    pt: String
  }

  type RegionalBloc {
    acronym: String
    name: String
    otherAcronyms: [String]
    otherNames: [String]
  }
`;
