const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createUser = async (req, res) => {
  const userData = req.body;
  const { status, data } = await userService.createUser(userData);
  return res.status(mapStatusHTTP(status)).json(data);
};

const fetchAllUsers = async (_req, res) => {
  const { status, data } = await userService.fetchAllUsers();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createUser,
  fetchAllUsers,
};