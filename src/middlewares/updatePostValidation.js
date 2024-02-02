const { updatePostSchema } = require('./validations/schema');

const blogPostValidation = (req, res, next) => {
  const blogPostData = req.body;

  const { error } = updatePostSchema.validate(blogPostData);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });

  next();
};

module.exports = blogPostValidation;