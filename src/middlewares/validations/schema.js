const joi = require('joi');

const loginFiled = joi.string().required().messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

const loginSchema = joi.object({
  email: loginFiled,
  password: loginFiled,
});

module.exports = {
  loginSchema,
};