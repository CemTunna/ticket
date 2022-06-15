import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  closeTicketStart,
  getTicketStart,
} from '../state/features/ticketSlice';
import {
  reset as notesReset,
  getNotesStart,
} from '../state/features/noteSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import Loader from '../components/ui/Loader';
const Ticket = () => {
  const { isError, msg, isLoading, ticket } = useAppSelector(
    (state) => state.ticket
  );

  const { isLoading: notesLoading, notes } = useAppSelector(
    (state) => state.note
  );

  const {
    user: { token },
  } = useAppSelector((state) => state.auth);
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = params;
  console.log(id);
  useEffect(() => {
    if (isError) {
      toast.error(msg);
    }
    dispatch(getTicketStart({ id, token }));
    dispatch(getNotesStart({ id, token }));
    //eslint-disable-next-line
  }, [isError, id, msg, token]);

  if (isLoading) return <Loader />;
  if (notesLoading) return <Loader />;

  const onClose = () => {
    dispatch(closeTicketStart({ token, id }));
    toast.success('ticket successfully closed');
    navigate('/tickets');
  };

  return (
    <div>
      <header>
        {/* back btn */}
        <h2>
          Ticket ID: {ticket._id} <div>{ticket.status}</div>
        </h2>
        <h3>
          Date submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
        </h3>
        <hr />
        <div>
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
      {/* {notes.map(note=><NoteItem/>)} */}
      {ticket.status !== 'closed' && (
        <button onClick={onClose}>Close ticket</button>
      )}
    </div>
  );
};

export default Ticket;
