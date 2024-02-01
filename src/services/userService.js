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

module.exports = {
  createUser,
};