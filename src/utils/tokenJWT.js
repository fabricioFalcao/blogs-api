const JWT = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const config = { expiresIn: '1d' };

const generateToken = (payload) => JWT.sign(payload, secretKey, config);

const decodeToken = (token) => JWT.verify(token, secretKey);

module.exports = {
  generateToken,
  decodeToken,
};