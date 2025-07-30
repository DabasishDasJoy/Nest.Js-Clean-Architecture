import * as Joi from 'joi';

export const serverValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  PORT: Joi.number().port().required(),
  HOST: Joi.string().hostname().required(),
  API_PREFIX: Joi.string().required(),
  CORS_ORIGIN: Joi.string().required(),
});
