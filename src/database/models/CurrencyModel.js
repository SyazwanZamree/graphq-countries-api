import mongoose, { Schema } from 'mongoose';

const CurrencySchema = new Schema({
  code: { type: String },
  name: { type: String },
  symbol: { type: String },
});

export default mongoose.model('Currency', CurrencySchema);
