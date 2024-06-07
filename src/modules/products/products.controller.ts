import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../utils';
import * as productService from './products.service';

export const getProducts = catchAsync(async (res: Response) => {
  const result = await productService.getProducts();
  res.send(result);
});

export const createProduct = catchAsync(async (req: Request, res: Response) => {
  const product = await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(product);
});
