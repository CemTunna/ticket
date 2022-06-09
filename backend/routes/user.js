const express = require('express');

const validationMiddleware = require('../middlewares/validationMiddleware');

const userSchema = require('../validations/userValidation');

const { login, register } = require('../controllers/user');

const router = express.Router();

router.post('/register', validationMiddleware(userSchema), register);

router.post('/login', login);

module.exports = router;
