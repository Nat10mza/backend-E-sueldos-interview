import express, { Router } from 'express';
// import { auth } from '@/modules/auth';
import { productsController, productsValidation } from '../../modules/products';
import { validate } from '../../modules/validate';

const router: Router = express.Router();

// user: ['getUsers', 'getStocks', 'getProducts'],
// admin: ['getUsers', 'getStocks', 'getProducts', 'manageUsers', 'manageStocks', 'manageProducts'],

// eslint-disable-next-line prettier/prettier
router
  .route('/')
  .post(validate(productsValidation.createProduct), productsController.createProduct)
  .get(validate(productsValidation.getProducts), productsController.getProducts);

// router
//   .route('/:productId')
//   .get(validate(productsValidation.getProduct), productsController.getProductById)
//   .patch(validate(productsValidation.updateProduct), productsController.updateProduct)
//   .delete(validate(productsValidation.deleteProduct), productsController.deleteProduct);

export default router;
