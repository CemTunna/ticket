const express = require('express');

const validation = require('../middlewares/validation');

const userSchema = require('../validations/userValidation');

const { login, register } = require('../controllers/user');

const router = express.Router();

router.post('/', validation(userSchema), register);

router.post('/login', login);

module.exports = router;
