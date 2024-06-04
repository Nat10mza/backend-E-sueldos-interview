import Product from './products.model';

export const getProducts = async (): Promise<any> => {
  const products = await Product.find();
  return products;
};

export const createProduct = async (productBody: any): Promise<any> => {
  return Product.create(productBody);
};
