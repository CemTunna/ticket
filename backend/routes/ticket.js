const express = require('express');

const {
  createTicket,
  getTickets,
  getTicket,
  deleteTicket,
  updateTicket,
} = require('../controllers/ticket');

const router = express.Router();

const setProtect = require('../middlewares/authMiddleware');

router.route('/').get(setProtect, getTickets).post(setProtect, createTicket);
router
  .route('/:id')
  .get(setProtect, getTicket)
  .delete(setProtect, deleteTicket)
  .put(setProtect, updateTicket);
module.exports = router;
