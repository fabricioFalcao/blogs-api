const { loginSchema } = require('./validations/schema');

const loginValidation = (req, res, next) => {
  const credentials = req.body;

  const { error } = loginSchema.validate(credentials);
  if (error) return res.status(400).json({ message: error.message });

  next();
};

module.exports = loginValidation;