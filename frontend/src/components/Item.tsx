import React from 'react';
import { Link } from 'react-router-dom';
const Item = ({ ticket }: any) => {
  return (
    <div>
      <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
      <div>{ticket.issue}</div>
      <div>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`}> Details</Link>
    </div>
  );
};

export default Item;
