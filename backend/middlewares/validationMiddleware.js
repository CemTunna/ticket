const validationMiddleware = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.validate(body);
    next();
    return next();
  } catch (error) {
    return res.status(400).json({ error: 'Wrong credentials' });
  }
};
module.exports = validationMiddleware;
