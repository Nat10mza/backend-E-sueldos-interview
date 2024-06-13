// import httpStatus from 'http-status';
import mongoose from 'mongoose';
import Product from '../products/products.model';
import Stock from './files.model';
// import { ApiError } from '../errors';

export const getStocks = async (): Promise<any> => {
  const productsWithStocks = await Product.aggregate([
    {
      $lookup: {
        from: 'stocks',
        localField: '_id',
        foreignField: 'product',
        as: 'stocks',
      },
    },
    {
      $unwind: {
        path: '$stocks',
        preserveNullAndEmptyArrays: true,
      },
    },
  ]);
  return productsWithStocks;
};

export const getStockById = async (id: mongoose.Types.ObjectId): Promise<any> => Stock.findById(id);

export const createStock = async (stockBody: any): Promise<any> => {
  const existingProduct = await Product.findById(stockBody._id);
  const existingStock = await Stock.findOne({ product: stockBody.product });

  if (existingProduct) {
    throw new Error('Enter an existing product');
  }

  if (existingStock) {
    throw new Error('Stock for this product already exists');
  }
  return Stock.create(stockBody);
};

// export const updateStockById = async (productId: mongoose.Types.ObjectId, updateBody: UpdateStockBody): Promise<any> => {
//   const existingProduct = await Product.findById(updateBody.product);
//   const stock = await getStockById(productId);

//   if (!existingProduct) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
//     return;
//   }

//   if (!stock) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Stock not found');
//   }

//   Object.assign(stock, updateBody);
//   await stock.save();
//   return stock;
// };
