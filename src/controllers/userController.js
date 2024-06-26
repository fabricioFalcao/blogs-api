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

const fetchUserById = async (req, res) => {
  const { id: userId } = req.params;
  const { status, data } = await userService.fetchUserById(userId);
  return res.status(mapStatusHTTP(status)).json(data);
};

const deleteUser = async (req, res) => {
  const userId = req.locals.decodedData.id;
  const { status, data } = await userService.deleteUser(userId);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createUser,
  fetchAllUsers,
  fetchUserById,
  deleteUser,
};