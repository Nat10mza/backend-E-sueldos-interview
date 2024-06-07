import mongoose from 'mongoose';
import { IStock } from './stock.interfaces';
import { toJSON } from '../toJSON';

const stockSchema = new mongoose.Schema<IStock>(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    // product: {
    //   type: ID,
    //   required: true,
    //   trim: true,
    // },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

stockSchema.plugin(toJSON);

const Stock = mongoose.model('Stock', stockSchema);

export default Stock;
