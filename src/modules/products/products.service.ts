import httpStatus from 'http-status';
import mongoose from 'mongoose';
import Product from './products.model';
import { ApiError } from '../errors';

export const getProducts = async (): Promise<any> => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (id: mongoose.Types.ObjectId): Promise<any> => Product.findById(id);

export const createProduct = async (productBody: any): Promise<any> => {
  return Product.create(productBody);
};

export const updateProductById = async (productId: mongoose.Types.ObjectId, updateBody: any): Promise<any | null> => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  // if (updateBody.email && (await Product.isEmailTaken(updateBody.email, productId))) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

export const deleteProductById = async (productId: mongoose.Types.ObjectId): Promise<any | null> => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  await product.deleteOne();
  return product;
};
