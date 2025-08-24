import Joi from 'joi';

export const jwtConfigValidationSchema = Joi.object({
    ACCESS_TOKEN_SECRET: Joi.string().required(),
    REFRESH_TOKEN_SECRET: Joi.string().required(),
    ACCESS_TOKEN_EXPIRES_IN: Joi.string().required(),
    REFRESH_TOKEN_EXPIRES_IN: Joi.string().required(),
});
