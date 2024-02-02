const { BlogPost, User, Category } = require('../models');

const updatePost = async (updateData, id, userId) => {
  try {
    const [updatedPost] = await BlogPost.update(updateData, { where: { id, userId } });

    if (updatedPost < 1) return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  
    const post = await BlogPost.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ] });
  
    return { status: 'SUCCESSFUL', data: post };
  } catch (error) {
    return { status: 'SERVER_ERROR', data: { message: error.message } };
  }
};

module.exports = {
  updatePost,
};