const { userSchema } = require('./validations/schema');

const newUserValidation = (req, res, next) => {
  const userData = req.body;

  const { error } = userSchema.validate(userData);
  if (error) return res.status(400).json({ message: error.message });

  next();
};

module.exports = newUserValidation;