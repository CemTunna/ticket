const asyncHandler = require('express-async-handler');

const bcrypt = require('bcryptjs');

const getToken = require('../utils/getToken');

const User = require('../models/userModel');

const registerBcryption = require('../utils/registerBcryption');

// REGISTER
// Public
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
    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: getToken(user._id),
    });
  } else {
    return res.status(400).json({ msg: 'Invalid user data' });
  }
});

// LOGIN
// Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const isPasswordMatch = await bcrypt.compareSync(password, user.password);

  if (user && isPasswordMatch) {
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: getToken(user._id),
    });
  } else {
    return res.status(401).json({
      msg: 'Wrong credentials',
    });
  }
});

// ME
// Private
const me = asyncHandler(async (req, res) => {
  const chosenUser = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
  };
  res.status(200).json(chosenUser);
});

module.exports = {
  login,
  register,
  me,
};
