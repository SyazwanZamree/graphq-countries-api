import mongoose, { Schema } from 'mongoose';

const RegionalBlocSchema = new Schema({
  acronym: { type: String },
  name: { type: String },
  otherAcronyms: { type: String },
  otherNames: { type: String },
});

export default mongoose.model('RegionalBloc', RegionalBlocSchema);
