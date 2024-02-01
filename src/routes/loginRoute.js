const route = require('express').Router();

const loginValidation = require('../middlewares/loginValidation');
const { loginController } = require('../controllers');

route.post('/', loginValidation, loginController.login);

module.exports = route;