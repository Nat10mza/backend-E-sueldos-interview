import Product from './products.model';

export const getProducts = async (): Promise<any> => {
  const products = await Product.find();
  return products;
};

export const getIdAndNames = async (): Promise<any> => {
  const products = await Product.find({}, 'name _id').exec();
  return products;
};

export const createProduct = async (productBody: any): Promise<any> => {
  return Product.create(productBody);
};
