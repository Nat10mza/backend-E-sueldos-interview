import Joi from 'joi';
// import mongoose from 'mongoose';
import { objectId } from '../validate';

const createProductBody = {
  user: Joi.string().required().custom(objectId),
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
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
