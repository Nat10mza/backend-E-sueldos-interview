import mongoose from 'mongoose';
import Product from './products.model';

export const getProducts = async (): Promise<any> => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (id: mongoose.Types.ObjectId): Promise<any> => Product.findById(id);

export const createProduct = async (productBody: any): Promise<any> => {
  return Product.create(productBody);
};
