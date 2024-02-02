const route = require('express').Router();

const { blogPostController } = require('../controllers');
const userAuthenticator = require('../middlewares/userAuthenticator');
const blogPostValidation = require('../middlewares/blogPostValidation');

route.get('/', userAuthenticator, blogPostController.fetchAllPosts);
route.post('/', userAuthenticator, blogPostValidation, blogPostController.submitNewPost);

module.exports = route;