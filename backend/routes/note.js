const express = require('express');

const { getNotes, createNote } = require('../controllers/note');

const router = express.Router({ mergeParams: true });

const setProtect = require('../middlewares/authMiddleware');

router.route('/').get(setProtect, getNotes).post(setProtect, createNote);
module.exports = router;
