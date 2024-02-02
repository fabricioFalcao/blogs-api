const { Op } = require('sequelize');
const { BlogPost, PostCategory, Category } = require('../models');

const validateCategories = async (categoryIds) => {
  const { count } = await Category.findAndCountAll({
    where: {
      id: {
        [Op.in]: categoryIds,
      },
    },
  });
  return count === categoryIds.length;
};

const submitNewPost = async (blogPostData, categoryIds) => {
  const validCategories = await validateCategories(categoryIds);
  if (!validCategories) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } }; 
  } 
  try {
    const newBlogPost = await BlogPost.create(blogPostData);

    const fuckingStupidTrybeIdeaOfRenamingTimestamps = { id: newBlogPost.id,
      title: newBlogPost.title,
      content: newBlogPost.content,
      userId: newBlogPost.userId,
      updated: newBlogPost.updatedAt,
      published: newBlogPost.createdAt };

    const bulkData = categoryIds.map((categoryId) => ({ postId: newBlogPost.id, categoryId }));

    await PostCategory.bulkCreate(bulkData);
  
    return { status: 'CREATED', data: fuckingStupidTrybeIdeaOfRenamingTimestamps };
  } catch (error) {
    return { status: 'SERVER_ERROR', data: { message: error.message } };
  }
};

module.exports = {
  submitNewPost,
};