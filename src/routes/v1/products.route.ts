import { auth } from '@/modules/auth';
import { productsController, productsValidation } from '@/modules/products';
import { validate } from '@/modules/validate';
import express, { Router } from 'express';

const router: Router = express.Router();

router.route('/').get(auth('getProducts'), validate(productsValidation.getProducts), productsController.getProducts);

export default router;
