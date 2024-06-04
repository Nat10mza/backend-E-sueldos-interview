import Joi from 'joi';
import mongoose from 'mongoose';
import { objectId } from '../validate';

const createProductBody = {
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  user: Joi.string().required().custom(objectId),
  price: Joi.number().required().min(0),
};

export const createProduct = {
  body: Joi.object().keys(createProductBody),
};

export const getProducts = {
  query: Joi.object().keys({
    name: Joi.string(),
    user: Joi.string().custom(objectId),
  }),
};
