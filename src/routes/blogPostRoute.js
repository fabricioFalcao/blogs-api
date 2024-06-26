const route = require('express').Router();

const { blogPostController } = require('../controllers');
const userAuthenticator = require('../middlewares/userAuthenticator');
const blogPostValidation = require('../middlewares/blogPostValidation');
const updatePostValidation = require('../middlewares/updatePostValidation');

route.get('/', userAuthenticator, blogPostController.fetchAllPosts);
route.get('/search', userAuthenticator, blogPostController.searchPost);
route.get('/:id', userAuthenticator, blogPostController.fetchPostById);
route.post('/', userAuthenticator, blogPostValidation, blogPostController.submitNewPost);
route.put('/:id', userAuthenticator, updatePostValidation, blogPostController.updatePost);
route.delete('/:id', userAuthenticator, blogPostController.deletePost);

module.exports = route;