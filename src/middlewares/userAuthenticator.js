const { decodeToken } = require('../utils/tokenJWT');

const userAuthenticator = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const [, token] = authorization.split(' ');
  try {
    const decodedData = decodeToken(token);
    req.locals = { decodedData };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = userAuthenticator;