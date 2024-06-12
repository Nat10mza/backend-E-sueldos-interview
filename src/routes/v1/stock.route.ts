import express, { Router } from 'express';
// import { auth } from '@/modules/auth';
import { stockController } from '../../modules/stock';
// import { validate } from '@/modules/validate';

const router: Router = express.Router();

// user: ['getUsers', 'getStocks', 'getProducts'],
// admin: ['getUsers', 'getStocks', 'getProducts', 'manageUsers', 'manageStocks', 'manageProducts'],

// eslint-disable-next-line prettier/prettier
router.route('/').post(stockController.createStock).get(stockController.getStocks).patch();

router.route('/:stockId').get(stockController.getStock).patch(stockController.updateStock);

export default router;
