const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    issueTitle: {
      type: String,
      required: [true, "Add issue's topic"],
    },
    description: {
      type: String,
      required: [true, "Enter issue's description"],
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
      enum: ['closed', 'new', 'open'],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Ticket', ticketSchema);
