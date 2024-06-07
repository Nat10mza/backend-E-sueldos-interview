import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../utils';
import * as stockService from './stock.service';

// export const getStocks = catchAsync(async (res: Response) => {
//   // const result = await stockService.getStocks();
//   res.status(400);
// });

export const getStock = catchAsync(async (res: Response) => {
  const results = await stockService.getStock();
  res.status(httpStatus.CREATED).send(results);
});

export const createStock = catchAsync(async (req: Request, res: Response) => {
  const stock = await stockService.createStock(req.body);
  res.status(httpStatus.CREATED).send(stock);
});
