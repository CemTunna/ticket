const asyncHandler = require('express-async-handler');

const Ticket = require('../models/ticketModel');

const User = require('../models/userModel');

const getTickets = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401).json({ msg: 'User not found' });
  }
  const tickets = await Ticket.find({ user: req.user.id });
  res.status(200).json(tickets);
});

const getTicket = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ msg: 'User not found' });
  }
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    return res.status(404).json({ msg: 'Ticket not found' });
  }
  if (ticket.user.toString() !== req.user.id) {
    return res.status(401).json({ msg: 'Not authorized' });
  }
  res.status(200).json(ticket);
});

const createTicket = asyncHandler(async (req, res) => {
  const { issue, description } = req.body;
  if (!issue) {
    return res.status(400).json({ msg: 'Please add issue title' });
  }
  if (!description) {
    return res.status(400).json({ msg: 'Please add issue description' });
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ msg: 'User not found' });
  }
  const ticket = await Ticket.create({
    issue,
    description,
    user: req.user.id,
    status: 'new',
  });

  return res.status(201).json(ticket);
});

const deleteTicket = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ msg: 'User not found' });
  }
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    return res.status(404).json({ msg: 'Ticket not found' });
  }
  if (ticket.user.toString() !== req.user.id) {
    return res.status(401).json({ msg: 'Not authorized' });
  }
  await ticket.remove();
  res.status(200).json({ msg: 'Ticket deleted' });
});

const updateTicket = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(401).json({ msg: 'User not found' });
  }
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    return res.status(404).json({ msg: 'Ticket not found' });
  }
  if (ticket.user.toString() !== req.user.id) {
    return res.status(401).json({ msg: 'Not authorized' });
  }
  const newTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(newTicket);
});

module.exports = {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
};
