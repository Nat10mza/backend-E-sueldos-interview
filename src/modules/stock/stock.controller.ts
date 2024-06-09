import { Request, Response } from 'express';
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import { catchAsync } from '../utils';
import * as stockService from './stock.service';
import { ApiError } from '../errors';

// export const getStocks = catchAsync(async (res: Response) => {
//   // const result = await stockService.getStocks();
//   res.status(400);
// });

export const getStocks = catchAsync(async (_req: Request, res: Response) => {
  const results = await stockService.getStocks();
  res.send(results);
});

export const getStock = catchAsync(async (req: Request, res: Response) => {
  if (req.params['stockId']) {
    const stock = await stockService.getStockById(new mongoose.Types.ObjectId(req.params['stockId']));
    if (!stock) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Stock not found');
    }
    res.send(stock);
  }
});

export const createStock = catchAsync(async (req: Request, res: Response) => {
  const stock = await stockService.createStock(req.body);
  res.status(httpStatus.CREATED).send(stock);
});

export const updateStock = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['stockId'] === 'string') {
    const stock = await stockService.updateStockById(new mongoose.Types.ObjectId(req.params['stockId']), req.body);
    res.send(stock);
  }
});
