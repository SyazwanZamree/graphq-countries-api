import mongoose, { Schema } from 'mongoose';

const LanguageSchema = new Schema({
  iso639_1: { type: String },
  iso639_2: { type: String },
  name: { type: String },
  nativeName: { type: String },
});

export default mongoose.model('Language', LanguageSchema);
