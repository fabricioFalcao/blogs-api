const { blogPostService, anotherPostService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const submitNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.locals.decodedData.id;
  const blogPostData = { title, content, userId };
  const { status, data } = await blogPostService.submitNewPost(blogPostData, categoryIds);
  return res.status(mapStatusHTTP(status)).json(data);
};

const fetchAllPosts = async (_req, res) => {
  const { status, data } = await blogPostService.fetchAllPosts();
  return res.status(mapStatusHTTP(status)).json(data);
};

const fetchPostById = async (req, res) => {
  const { id: postId } = req.params;
  const { status, data } = await blogPostService.fetchPostById(postId);
  return res.status(mapStatusHTTP(status)).json(data);
};

const updatePost = async (req, res) => {
  const updateData = req.body;
  const { id } = req.params;
  const userId = req.locals.decodedData.id;
  const { status, data } = await anotherPostService.updatePost(updateData, id, userId);
  return res.status(mapStatusHTTP(status)).json(data);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.locals.decodedData.id;
  const { status, data } = await anotherPostService.deletePost(id, userId);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  submitNewPost,
  fetchAllPosts,
  fetchPostById,
  updatePost,
  deletePost,
};