const route = require('express').Router();

const loginValidation = require('../middlewares/loginValidation');
const { login } = require('../controllers');

route.post('/', loginValidation, login);

module.exports = route;