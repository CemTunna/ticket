const asyncHandler = require('express-async-handler');

const register = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
});
const login = asyncHandler(async (req, res) => {
  res.send('login');
});
module.exports = {
  login,
  register,
};
