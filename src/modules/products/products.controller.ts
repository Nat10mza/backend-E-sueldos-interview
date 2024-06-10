import mongoose from 'mongoose';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../utils';
import * as productService from './products.service';
import { ApiError } from '../errors';

// export const getProducts = catchAsync(async (res: Response) => {
//   // const result = await productService.getProducts();
//   res.status(400);
// });

export const getProducts = catchAsync(async (_req: Request, res: Response) => {
  const products = await productService.getProducts();
  res.json(products);
});

export const getProductById = catchAsync(async (req: Request, res: Response) => {
  if (req.params['productId']) {
    const stock = await productService.getProductById(new mongoose.Types.ObjectId(req.params['productId']));
    if (!stock) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Stock not found');
    }
    res.send(stock);
  }
});

export const createProduct = catchAsync(async (req: Request, res: Response) => {
  const product = await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(product);
});
