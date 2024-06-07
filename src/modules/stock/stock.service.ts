import Stock from './stock.model';

export const getStock = async (): Promise<any> => {
  const stocks = await Stock.find();
  return stocks;
};

export const createStock = async (stockBody: any): Promise<any> => {
  return Stock.create(stockBody);
};
