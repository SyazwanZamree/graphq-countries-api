import mongoose, { Schema } from 'mongoose';

const TranslationSchema = new Schema({
  de: { type: String },
  es: { type: String },
  fr: { type: String },
  ja: { type: String },
  it: { type: String },
  br: { type: String },
  pt: { type: String },
});

export default mongoose.model('Translation', TranslationSchema);
