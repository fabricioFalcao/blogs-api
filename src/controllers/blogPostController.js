const { blogPostService } = require('../services');
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

module.exports = {
  submitNewPost,
  fetchAllPosts,
};