import mongoose, { Schema } from 'mongoose';

const CountrySchema = new Schema({
  name: { type: String },
  topLevelDomain: [{ type: String }],
  alpha2Code: { type: String },
  alpha3Code: { type: String },
  callingCodes: [{ type: Number }],
  capital: { type: String },
  altSpellings: [{ type: String }],
  region: { type: String },
  subregion: { type: String },
  population: { type: Number },
  latlng: [{ type: Number }],
  demonym: { type: String },
  area: { type: Number },
  gini: { type: Number },
  timezones: [{ type: String }],
  borders: [{ type: String }],
  nativeName: { type: String },
  numericCode: { type: Number },
  currencies: [{
    type: Schema.Types.ObjectId,
    ref: 'Currency',
  }],
  languages: [{
    type: Schema.Types.ObjectId,
    ref: 'Language',
  }],
  translations: {
    type: Schema.Types.ObjectId,
    ref: 'Translation',
  },
  flag: { type: String },
  regionalBlocs: [{
    type: Schema.Types.ObjectId,
    ref: 'RegionalBloc',
  }],
  cioc: { type: String },
});

export default mongoose.model('Country', CountrySchema);
