const { categorySchema } = require('./validations/schema');

const loginValidation = (req, res, next) => {
  const categoryData = req.body;

  const { error } = categorySchema.validate(categoryData);
  if (error) return res.status(400).json({ message: error.message });

  next();
};

module.exports = loginValidation;