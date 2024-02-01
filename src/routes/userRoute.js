const route = require('express').Router();

const { userController } = require('../controllers');
const newUserValidation = require('../middlewares/newUserValidation');

route.post('/', newUserValidation, userController.createUser);

module.exports = route;