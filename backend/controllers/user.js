const asyncHandler = require('express-async-handler');

const bcrypt = require('bcryptjs');

const getToken = require('../utils/getToken');

const User = require('../models/userModel');

const registerBcryption = require('../utils/registerBcryption');

const register = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;

  // checks if user exist
  const exist = await User.findOne({ email });

  if (exist) {
    return res.status(400).json({ msg: 'User already exist' });
  }
  const hashedPassword = await registerBcryption(password);

  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: getToken(user._id),
    });
  } else {
    res.status(400).json({ msg: 'Invalid user data' });
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const isPasswordMatch = await bcrypt.compareSync(password, user.password);

  if (user && isPasswordMatch) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: getToken(user._id),
    });
  } else {
    res.status(401).json({
      msg: 'Wrong credentials',
    });
  }
});
module.exports = {
  login,
  register,
};
