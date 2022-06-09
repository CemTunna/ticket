const asyncHandler = require('express-async-handler');

const bcrypt = require('bcryptjs');

const User = require('../models/userModel');

const register = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;

  // checks if user exist
  const exist = await User.findOne({ email });

  if (exist) {
    return res.status(400).json({ msg: 'User already exist' });
  }

  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hash });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json({ msg: 'Invalid user data' });
  }
});
const login = asyncHandler(async (req, res) => {
  res.send('login');
});
module.exports = {
  login,
  register,
};
