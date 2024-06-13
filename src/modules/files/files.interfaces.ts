import mongoose from 'mongoose';

export interface IFiles {
  // product: id,
  product: mongoose.Types.ObjectId;
  quantity: number;
}

export type UpdateFilesBody = Partial<IFiles>;
