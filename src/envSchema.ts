import * as Joi from 'joi'

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
  PORT: Joi.number().default(3000),
  API_VERSION: Joi.string().default('1.0'),
  SWAGGER_TITLE: Joi.string().required(),
  SWAGGER_DESCRIPITON: Joi.string().required(),
})
