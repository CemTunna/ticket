const jwt = require('jsonwebtoken');

const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

const setProtect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.id).select('-password');
      next();
    } catch (error) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    if (!token) {
      console.log('tokennnn:', token);
      return res.status(401).json({ msg: 'Not authorized' });
    }
  }
  return next();
});

module.exports = setProtect;
