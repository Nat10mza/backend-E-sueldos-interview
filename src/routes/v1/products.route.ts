import express, { Router } from 'express';
// import { auth } from '@/modules/auth';
import { productsController } from '../../modules/products';
// import { validate } from '@/modules/validate';

const router: Router = express.Router();

// eslint-disable-next-line prettier/prettier
router.route('/').get(productsController.getProducts).post(productsController.createProduct);

export default router;
