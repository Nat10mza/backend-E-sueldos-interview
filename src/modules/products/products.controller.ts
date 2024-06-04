import { Request, Response } from 'express';
import { catchAsync, pick } from '../utils';
import * as productService from './products.service';
import httpStatus from 'http-status';

export const getProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.getProducts();
  res.send(result);
});

export const createProduct = catchAsync(async (req: Request, res: Response) => {
  const product = await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(product);
});
