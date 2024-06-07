import Joi from 'joi';
// import mongoose from 'mongoose';
import { objectId } from '../validate';

const createStockBody = {
  product: Joi.string().required(),
  quantity: Joi.number().required().min(0),
};

export const createStock = {
  body: Joi.object().keys(createStockBody),
};

export const getStocks = {
  query: Joi.object().keys({
    name: Joi.string(),
    user: Joi.string().custom(objectId),
  }),
};
