const { Category } = require('../models');

const createCategory = async (categoryData) => {
  try {
    const newCategory = await Category.create(categoryData);

    return { status: 'CREATED', data: newCategory };
  } catch (error) {
    return { status: 'SERVER_ERROR', data: { message: error.message } };
  }
};

const fetchAllCategories = async () => {
  const categoriesList = await Category.findAll({
    attributes: { exclude: ['password'] },
  });
  return { status: 'SUCCESSFUL', data: categoriesList };
};

module.exports = {
  createCategory,
  fetchAllCategories,
};