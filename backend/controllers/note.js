const asyncHandler = require('express-async-handler');

const Ticket = require('../models/ticketModel');

const Note = require('../models/noteModel');

const User = require('../models/userModel');

const getNotes = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ msg: 'User not found' });
  }
  const ticket = await Ticket.findById(req.params.id);
  if (ticket.user.toString() !== req.user.id) {
    return res.status(401).json({ msg: 'user npt authorized' });
  }

  const notes = await Note.find({ ticket: req.params.id });

  res.status(200).json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const { text } = req.body;

  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ msg: 'User not found' });
  }
  const ticket = await Ticket.findById(req.params.id);
  if (ticket.user.toString() !== req.user.id) {
    return res.status(401).json({ msg: 'user npt authorized' });
  }
  const note = await Note.create({
    text,
    user: req.user.id,
    ticket: ticket._id,
    isStaff: false,
  });

  return res.status(201).json(note);
});

module.exports = {
  getNotes,
  createNote,
};
