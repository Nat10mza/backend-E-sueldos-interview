import mongoose from 'mongoose';

export interface IProduct {
  user: mongoose.Types.ObjectId;
  name: string;
  description: string;
  image: string;
  price: number;
}
