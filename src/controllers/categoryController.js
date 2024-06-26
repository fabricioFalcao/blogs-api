const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createCategory = async (req, res) => {
  const categoryData = req.body;
  const { status, data } = await categoryService.createCategory(categoryData);
  return res.status(mapStatusHTTP(status)).json(data);
};

const fetchAllCategories = async (_req, res) => {
  const { status, data } = await categoryService.fetchAllCategories();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createCategory,
  fetchAllCategories,
};