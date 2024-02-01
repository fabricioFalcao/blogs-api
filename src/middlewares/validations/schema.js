const joi = require('joi');

const loginFiled = joi.string().required().messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

const loginSchema = joi.object({
  email: loginFiled,
  password: loginFiled,
});

const userSchema = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  image: joi.string().optional(),
});

module.exports = {
  loginSchema,
  userSchema,
};