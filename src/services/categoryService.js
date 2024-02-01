const { Category } = require('../models');

const createCategory = async (categoryData) => {
  try {
    const newCategory = await Category.create(categoryData);

    return { status: 'CREATED', data: newCategory };
  } catch (error) {
    return { status: 'SERVER_ERROR', data: { message: error.message } };
  }
};

module.exports = {
  createCategory,
};