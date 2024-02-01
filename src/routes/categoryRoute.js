const route = require('express').Router();

const { categoryController } = require('../controllers');
const userAuthenticator = require('../middlewares/userAuthenticator');
const categoryValidation = require('../middlewares/categoryValidation');

route.post('/', userAuthenticator, categoryValidation, categoryController.createCategory);

module.exports = route;