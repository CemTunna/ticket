import React, { Fragment, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import Loader from '../components/ui/Loader';
import { getTicketsStart, reset } from '../state/features/ticketSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Title from '../components/ui/Title';
import { Grid } from '@mui/material';
const Tickets = () => {
  const { isLoading, isSuccess, isError, msg, tickets } = useAppSelector(
    (state) => state.ticket
  );
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [isSuccess, dispatch]);
  useEffect(() => {
    if (isError) {
      toast.error(msg);
    }

    dispatch(getTicketsStart(user.token));
    dispatch(reset());
  }, [dispatch]);
  if (isLoading) return <Loader />;
  return (
    <Fragment>
      <Title>Tickets</Title>

      <Grid>
        {/* {tickets.map((ticket) => (
          <TicketItem />
        ))} */}
      </Grid>

      <Link to='/'>Back</Link>
    </Fragment>
  );
};

export default Tickets;
