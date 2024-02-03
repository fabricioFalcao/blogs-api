const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const updatePost = async (updateData, id, userId) => {
  try {
    const [updatedPost] = await BlogPost.update(updateData, { where: { id, userId } });

    if (!updatedPost) return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  
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

const deletePost = async (id, userId) => {
  try {
    const post = await BlogPost.findByPk(id);
    if (!post) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };

    const deletedPost = await BlogPost.destroy({ where: { id, userId } });
    if (!deletedPost) return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };

    return { status: 'NO_CONTENT' };
  } catch (error) {
    return { status: 'SERVER_ERROR', data: { message: error.message } };
  }
};

const searchPost = async (term) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${term}%` } },
        { content: { [Op.like]: `%${term}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 'SUCCESSFUL', data: posts };
};

module.exports = {
  updatePost,
  deletePost,
  searchPost,
};