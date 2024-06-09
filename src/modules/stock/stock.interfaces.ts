import mongoose from 'mongoose';

export interface IStock {
  // product: id,
  product: mongoose.Types.ObjectId;
  quantity: number;
}

export type UpdateStockBody = Partial<IStock>;
