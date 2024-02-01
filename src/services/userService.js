const { User } = require('../models');
const { generateToken } = require('../utils/tokenJWT');

const createUser = async (userData) => {
  try {
    await User.create(userData);
    const { email } = userData;
    const token = generateToken({ email });
    
    return { status: 'CREATED', data: { token } };
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return { status: 'CONFLICT', data: { message: 'User already registered' } };
    }
    return { status: 'SERVER_ERROR', data: { message: 'Unable to create user' } };
  }
};

const fetchAllUsers = async () => {
  const usersList = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { status: 'SUCCESSFUL', data: usersList };
};

const fetchUserById = async (userId) => {
  const user = await User.findByPk(userId, {
    attributes: { exclude: ['password'] },
  });

  if (!user) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };

  return { status: 'SUCCESSFUL', data: user };
};

module.exports = {
  createUser,
  fetchAllUsers,
  fetchUserById,
};