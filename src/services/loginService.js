const { User } = require('../models');
const { generateToken } = require('../utils/tokenJWT');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const token = generateToken({ id: user.id, email });
  return { status: 'SUCCESSFUL', data: { token } };
};

module.exports = {
  login,
};