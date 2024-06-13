import mongoose from 'mongoose';
import { IFiles } from './files.interfaces';
import { toJSON } from '../toJSON';

const filesSchema = new mongoose.Schema<IFiles>(
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

filesSchema.plugin(toJSON);

const Files = mongoose.model('Files', filesSchema);

export default Files;
