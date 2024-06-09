import Product from '../products/products.model';
import Stock from './stock.model';

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

export const createStock = async (stockBody: any): Promise<any> => {
  const existingStock = await Stock.findOne({ product: stockBody.product });

  if (existingStock) {
    throw new Error('Stock for this product already exists');
  }
  return Stock.create(stockBody);
};
