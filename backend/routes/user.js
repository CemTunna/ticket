const express = require('express');

const setProtect = require('../middlewares/authMiddleware');

const validationMiddleware = require('../middlewares/validationMiddleware');

const userSchema = require('../validations/userValidation');

const { login, register, me } = require('../controllers/user');

const router = express.Router();

router.post('/register', validationMiddleware(userSchema), register);

router.post('/login', login);

router.get('/me', setProtect, me);

module.exports = router;
