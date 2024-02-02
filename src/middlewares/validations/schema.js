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

const categorySchema = joi.object({
  name: joi.string().required(),
});

const blogPostSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.array().items(joi.number()).min(1).required(),
});

const updatePostSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
});

module.exports = {
  loginSchema,
  userSchema,
  categorySchema,
  blogPostSchema,
  updatePostSchema,
};