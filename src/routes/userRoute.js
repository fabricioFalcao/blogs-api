const route = require('express').Router();

const { userController } = require('../controllers');
const newUserValidation = require('../middlewares/newUserValidation');
const userAuthenticator = require('../middlewares/userAuthenticator');

route.post('/', newUserValidation, userController.createUser);
route.get('/', userAuthenticator, userController.fetchAllUsers);

module.exports = route;