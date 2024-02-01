const route = require('express').Router();

const { userController } = require('../controllers');
const newUserValidation = require('../middlewares/newUserValidation');
const userAuthenticator = require('../middlewares/userAuthenticator');

route.get('/', userAuthenticator, userController.fetchAllUsers);
route.get('/:id', userAuthenticator, userController.fetchUserById);
route.post('/', newUserValidation, userController.createUser);

module.exports = route;