import express, { Router } from 'express';
// import { auth } from '@/modules/auth';
import { stockController } from '../../modules/stock';
// import { validate } from '@/modules/validate';

const router: Router = express.Router();

// eslint-disable-next-line prettier/prettier
router.route('/').post(stockController.createStock).get(stockController.getStocks);

export default router;
